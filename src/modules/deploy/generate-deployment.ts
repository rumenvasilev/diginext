import { isJSON } from "class-validator";
import { log, logError, logWarn } from "diginext-utils/dist/console/log";
import { makeSlug } from "diginext-utils/dist/Slug";
import { makeDaySlug } from "diginext-utils/dist/string/makeDaySlug";
import * as fs from "fs";
import yaml from "js-yaml";
import _, { isEmpty } from "lodash";

import { getContainerResourceBySize } from "@/config/config";
import { DIGINEXT_DOMAIN, FULL_DEPLOYMENT_TEMPLATE_PATH, NAMESPACE_TEMPLATE_PATH } from "@/config/const";
import type { App, Cluster, ContainerRegistry } from "@/entities";
import type { DeployEnvironment } from "@/interfaces";
import type InputOptions from "@/interfaces/InputOptions";
import type { KubeIngress } from "@/interfaces/KubeIngress";
import { getAppConfig, loadEnvFileAsContainerEnvVars, objectToDeploymentYaml, resolveEnvFilePath } from "@/plugins";

import { DB } from "../api/DB";
import { generateDomains } from "./generate-domain";

export const generateDeployment = async (options: InputOptions) => {
	const { env, targetDirectory: appDirectory, buildNumber } = options;

	const appConfig = getAppConfig(appDirectory);
	const { slug } = appConfig;

	// DEFINE DEPLOYMENT PARTS:
	const BUILD_NUMBER = buildNumber || makeDaySlug();

	const registrySlug = appConfig.environment[env].registry;
	let nsName = appConfig.environment[env].namespace;
	let ingName = slug.toLowerCase();
	let svcName = slug.toLowerCase();
	let appName = slug.toLowerCase() + "-" + BUILD_NUMBER;
	let mainAppName = makeSlug(appConfig.name).toLowerCase();
	let basePath = appConfig.environment[env].basePath ?? "";

	// Prepare for building docker image
	const { imageURL } = appConfig.environment[env];

	// TODO: Replace BUILD_NUMBER so it can work with Skaffold
	const IMAGE_NAME = `${imageURL}:${BUILD_NUMBER}`;

	let projectSlug = appConfig.project;
	let domains = appConfig.environment[env].domains;
	let replicas = options.replicas ?? appConfig.environment[env].replicas ?? 1;

	const BASE_URL = domains && domains.length > 0 ? `https://${domains[0]}` : `http://${svcName}.${nsName}.svc.cluster.local`;
	const clusterShortName = appConfig.environment[env].cluster;

	// get container registry
	let registry: ContainerRegistry = await DB.findOne<ContainerRegistry>("registry", { slug: registrySlug });
	if (isEmpty(registry)) {
		logError(`Cannot find any container registries with slug as "${registrySlug}", please contact your admin or create a new one.`);
		return;
	}

	// get destination cluster
	let cluster = await DB.findOne<Cluster>("cluster", { shortName: clusterShortName });
	if (isEmpty(cluster)) {
		logError(`Cannot find any clusters with short name as "${clusterShortName}", please contact your admin or create a new one.`);
		return;
	}

	// get registry secret as image pulling secret:
	const { imagePullingSecret } = registry;

	// prerelease:
	const prereleaseSubdomainName = `${slug.toLowerCase()}.prerelease`;
	let prereleaseIngName = `prerelease-${ingName}`;
	let prereleaseSvcName = `prerelease-${svcName}`;
	let prereleaseAppName = `prerelease-${appName}`;
	let prereleaseIngressDoc, prereleaseSvcDoc, prereleaseDeployDoc;
	let prereleaseDomain: string;

	// Setup a domain for prerelease
	if (env == "prod") {
		const { status, domain } = await generateDomains({
			primaryDomain: DIGINEXT_DOMAIN,
			subdomainName: prereleaseSubdomainName,
			clusterShortName: appConfig.environment[env].cluster,
		});
		if (status === 0) {
			logError(`Can't create "prerelease" domain: ${domain}`);
			return;
		}
		prereleaseDomain = domain;
	}
	if (env === "prod") log({ prereleaseDomain });

	// ! Remove this ENV handling part (OLD TACTIC)
	// Find the relevant ENV file:
	// const currentEnvFile = resolveEnvFilePath({ targetDirectory: appDirectory, env });

	// let defaultEnvs: any = {};
	// if (currentEnvFile) {
	// 	defaultEnvs = dotenv.parse(fs.readFileSync(currentEnvFile));

	// 	// Lấy BASE_PATH hoặc NEXT_PUBLIC_BASE_PATH từ user config ENV:
	// 	basePath = typeof defaultEnvs.BASE_PATH == "undefined" ? basePath : defaultEnvs.BASE_PATH;
	// 	basePath = trimFirstSlash(basePath);
	// 	defaultEnvs.NODE_URL = BASE_URL;
	// }

	// convert ENV variables object to K8S environment:
	// const containerEnvs = objectToKubeEnvVars(defaultEnvs);

	// * [NEW TACTIC] Fetch ENV variables from database:
	const app = await DB.findOne<App>("app", { slug });
	if (!app) {
		logError(`[GENERATE DEPLOYMENT YAML] App "${slug}" not found.`);
		return;
	}
	const appEnvironment =
		app.environment[env] && isJSON(app.environment[env])
			? (JSON.parse(app.environment[env] as string) as DeployEnvironment)
			: (app.environment[env] as DeployEnvironment);
	let containerEnvs = appEnvironment.envVars;

	// ENV variables -> fallback support:
	if (isEmpty(containerEnvs)) {
		const envFile = resolveEnvFilePath({ targetDirectory: appDirectory, env, ignoreIfNotExisted: true });
		if (envFile) {
			containerEnvs = loadEnvFileAsContainerEnvVars(envFile);
			logWarn(`[GENERATE DEPLOYMENT YAML] Fall back loaded ENV variables from files of GIT repository.`);
		}
	}

	// prerelease ENV variables (is the same with PROD ENV variables, except the domains/origins if any):
	let prereleaseEnvs = [...containerEnvs];
	if (!isEmpty(domains)) {
		prereleaseEnvs.forEach((envVar) => {
			let curValue = envVar.value;
			if (curValue.indexOf(domains[0]) > -1) {
				// replace all production domains with PRERELEASE domains
				envVar.value = curValue.replace(new RegExp(domains[0], "gi"), prereleaseDomain);
			}
		});
	}

	// Should inherit the "Ingress" config from the previous deployment?
	let previousDeployment,
		previousIng: KubeIngress = { metadata: { annotations: {} } };

	if (options.shouldInherit && appEnvironment) {
		try {
			previousDeployment = yaml.loadAll(appEnvironment.deploymentYaml);
			previousDeployment.map((doc, index) => {
				if (doc && doc.kind == "Ingress") previousIng = doc;
			});
		} catch (e) {
			logWarn(e);
		}
	}

	// write namespace.[env].yaml
	let namespaceContent = fs.readFileSync(NAMESPACE_TEMPLATE_PATH, "utf8");

	let namespaceObject = yaml.load(namespaceContent);
	namespaceObject.metadata.name = nsName;
	namespaceObject.metadata.labels = namespaceObject.metadata.labels || {};
	namespaceObject.metadata.labels.project = projectSlug.toLowerCase();
	namespaceObject.metadata.labels.owner = options.username.toLowerCase();
	namespaceObject.metadata.labels.workspace = options.workspace.slug.toLowerCase();

	namespaceContent = objectToDeploymentYaml(namespaceObject);

	// write deployment.[env].yaml (ing, svc, deployment)
	let deploymentContent = fs.readFileSync(FULL_DEPLOYMENT_TEMPLATE_PATH, "utf8");
	let deploymentCfg: any[] = yaml.loadAll(deploymentContent);

	if (deploymentCfg.length) {
		deploymentCfg.forEach((doc, index) => {
			// Make sure all objects stay in the same namespace:
			if (doc && doc.metadata && doc.metadata.namespace) {
				doc.metadata.namespace = nsName;
			}

			// INGRESS
			if (doc && doc.kind == "Ingress") {
				if (domains.length > 0) {
					const ingCfg = doc;
					ingCfg.metadata.name = ingName;
					ingCfg.metadata.namespace = nsName;

					// inherit config from previous deployment
					if (appConfig.environment[env].shouldInherit) {
						ingCfg.metadata.annotations = {
							...previousIng.metadata.annotations,
							...ingCfg.metadata.annotations,
						};
					}

					if (appConfig.environment[env].ssl == "letsencrypt") {
						ingCfg.metadata.annotations["cert-manager.io/cluster-issuer"] = "letsencrypt-prod";
					}

					// labels
					if (!doc.metadata.labels) doc.metadata.labels = {};
					doc.metadata.labels.project = projectSlug;
					doc.metadata.labels.app = appName;
					doc.metadata.labels["main-app"] = mainAppName;
					doc.metadata.labels.phase = "live";

					// redirect
					if (appConfig.environment[env].redirect) {
						if (!domains.length) {
							logWarn(`Không thể redirect về domain chính nếu không có domain nào ở "${env}" trong dx.json`);
						} else if (domains.length == 1) {
							logWarn(`Không thể redirect về domain chính nếu chỉ có 1 domain ở "${env}" dx.json`);
						} else {
							const otherDomains = domains.slice(1);
							let redirectStr = "";
							otherDomains.map((domain) => {
								redirectStr += `if ($host = '${domain}') {
  rewrite / https://${domains[0]}$request_uri redirect;
}\n`;
							});
							ingCfg.metadata.annotations["nginx.ingress.kubernetes.io/configuration-snippet"] = redirectStr;
						}
					}

					ingCfg.spec.tls = [];
					ingCfg.spec.rules = [];

					domains.map((domain) => {
						// tls
						ingCfg.spec.tls.push({
							hosts: [domain],
							secretName: appConfig.environment[env].tlsSecret,
						});

						// rules
						ingCfg.spec.rules.push({
							host: domain,
							http: {
								paths: [
									{
										path: "/" + basePath,
										pathType: "Prefix",
										backend: {
											service: { name: svcName, port: { number: appConfig.environment[env].port } },
										},
									},
								],
							},
						});
					});

					// delete SSL config if have to:
					if (appConfig.environment[env].ssl == "none") {
						try {
							delete ingCfg.metadata.annotations["cert-manager.io/cluster-issuer"];
							delete ingCfg.spec.tls;
						} catch (e) {}
					}

					// pre-release
					prereleaseIngressDoc = _.cloneDeep(doc);
					prereleaseIngressDoc.metadata.name = prereleaseIngName;
					prereleaseIngressDoc.metadata.namespace = nsName;
					prereleaseIngressDoc.metadata.annotations["nginx.ingress.kubernetes.io/configuration-snippet"] = "";
					prereleaseIngressDoc.metadata.annotations["cert-manager.io/cluster-issuer"] = "letsencrypt-prod";
					prereleaseIngressDoc.spec.tls = [
						{
							hosts: [prereleaseDomain],
							secretName: `secret-${_.kebabCase(prereleaseDomain)}`,
						},
					];
					prereleaseIngressDoc.spec.rules = [
						{
							host: prereleaseDomain,
							http: {
								paths: [
									{
										path: "/" + basePath,
										pathType: "Prefix",
										backend: {
											service: { name: prereleaseSvcName, port: { number: appConfig.environment[env].port } },
										},
									},
								],
							},
						},
					];
				} else {
					delete deploymentCfg[index];
					doc = null;
				}
			}

			if (doc && doc.kind == "Service") {
				doc.metadata.name = svcName;

				if (!doc.metadata.labels) doc.metadata.labels = {};
				doc.metadata.labels.project = projectSlug;
				doc.metadata.labels.app = appName;
				doc.metadata.labels["main-app"] = mainAppName;
				doc.metadata.labels.phase = "live";
				doc.spec.selector.app = appName;

				// Routing traffic to the same pod base on ClientIP
				doc.spec.sessionAffinity = "ClientIP";
				doc.spec.ports = [{ port: appConfig.environment[env].port, targetPort: appConfig.environment[env].port }];

				// clone svc to prerelease:
				prereleaseSvcDoc = _.cloneDeep(doc);
				prereleaseSvcDoc.metadata.name = prereleaseSvcName;
				prereleaseSvcDoc.metadata.namespace = nsName;
				prereleaseSvcDoc.metadata.labels["main-app"] = mainAppName;
				prereleaseSvcDoc.metadata.labels.app = appName;
				prereleaseSvcDoc.metadata.labels.phase = "prerelease";
				prereleaseSvcDoc.spec.selector.app = prereleaseAppName;
			}

			if (doc && doc.kind == "Deployment") {
				if (env == "dev") {
					// development environment
					doc.spec.template.spec.containers[0].resources = {};
				} else {
					// canary, production, staging,...
					doc.spec.template.spec.containers[0].resources = getContainerResourceBySize(appConfig.environment[env].size || "1x");

					// * Add roll out strategy -> Rolling Update
					doc.spec.strategy = {
						type: "RollingUpdate",
						rollingUpdate: {
							maxSurge: 1,
							maxUnavailable: 1,
						},
					};
				}

				// container replicas
				doc.spec.replicas = replicas;
				doc.metadata.name = appName;

				// tag "live" labels
				if (!doc.metadata.labels) doc.metadata.labels = {};
				doc.metadata.labels.project = projectSlug;
				doc.metadata.labels.app = appName;
				doc.metadata.labels["main-app"] = mainAppName;
				doc.metadata.labels.phase = "live";

				doc.spec.template.metadata.labels.project = projectSlug;
				doc.spec.template.metadata.labels.app = appName;
				doc.spec.template.metadata.labels["main-app"] = mainAppName;
				doc.spec.template.metadata.labels.phase = "live";
				doc.spec.selector.matchLabels.app = appName;

				// container
				doc.spec.template.spec.containers[0].name = appName;

				// Inject "imagePullSecrets" to pull image from the container registry
				doc.spec.template.spec.imagePullSecrets = [{ name: imagePullingSecret.name }];

				doc.spec.template.spec.containers[0].image = IMAGE_NAME;
				doc.spec.template.spec.containers[0].env = containerEnvs;

				// ! PORT 80 sẽ không sử dụng được trên cluster của Digital Ocean
				doc.spec.template.spec.containers[0].ports = [{ containerPort: appConfig.environment[env].port || 3000 }];

				// clone deployment to prerelease:
				prereleaseDeployDoc = _.cloneDeep(doc);
				prereleaseDeployDoc.metadata.namespace = nsName;
				prereleaseDeployDoc.metadata.name = prereleaseAppName;
				prereleaseDeployDoc.metadata.labels.phase = "prerelease";
				prereleaseDeployDoc.metadata.labels["main-app"] = mainAppName;
				prereleaseDeployDoc.metadata.labels.app = prereleaseAppName;
				prereleaseDeployDoc.metadata.labels.project = projectSlug;

				prereleaseDeployDoc.spec.replicas = 1;
				prereleaseDeployDoc.spec.template.metadata.labels.phase = "prerelease";
				prereleaseDeployDoc.spec.template.metadata.labels["main-app"] = mainAppName;
				prereleaseDeployDoc.spec.template.metadata.labels.app = prereleaseAppName;
				prereleaseDeployDoc.spec.template.metadata.labels.project = projectSlug;
				prereleaseDeployDoc.spec.template.spec.containers[0].image = IMAGE_NAME;
				prereleaseDeployDoc.spec.template.spec.containers[0].env = prereleaseEnvs;
				prereleaseDeployDoc.spec.template.spec.containers[0].resources = {};

				// selector
				prereleaseDeployDoc.spec.selector.matchLabels.app = prereleaseAppName;

				// ! no need roll out strategy for prerelease:
				delete prereleaseDeployDoc.spec.strategy;
			}
		});
	} else {
		logError("YAML deployment template is incorrect");
	}

	deploymentContent = objectToDeploymentYaml(deploymentCfg);

	/**
	 * PRE-RELEASE DEPLOYMENT:
	 */
	let prereleaseYamlObject = [prereleaseIngressDoc, prereleaseSvcDoc, prereleaseDeployDoc];
	let prereleaseDeploymentContent = objectToDeploymentYaml(prereleaseYamlObject);

	// End point của ứng dụng:
	let endpoint = `https://${domains[0]}/${basePath}`;
	const prereleaseUrl = `https://${prereleaseDomain}/${basePath}`;

	return {
		// namespace
		namespaceContent,
		namespaceObject,
		// deployment (ingress, service, pods,...)
		deploymentContent,
		deploymentCfg,
		// prerelease (ingress, service, pods,...)
		prereleaseYamlObject,
		prereleaseDeploymentContent,
		// accessibility
		BUILD_NUMBER,
		IMAGE_NAME,
		endpoint,
		prereleaseUrl,
	};
};
