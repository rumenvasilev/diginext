import { IApp, ICluster, IContainerRegistry, IFramework, IGitProvider, IRole, IWorkspace } from "@/entities";
import { MongoDB } from "../../src/plugins/mongodb";
import {
	CLI_TEST_DIR,
	apiKeySvc,
	appSvc,
	clusterSvc,
	createFakeUser,
	createWorkspace,
	currentWorkspace,
	dxCmd,
	frameworkCtl,
	frameworkSvc,
	getCurrentUser,
	gitCtl,
	gitSvc,
	loginUser,
	registryCtl,
	roleSvc,
	serviceAccountSvc,
	userSvc,
	workspaceSvc,
} from "../helpers";

import GitProviderAPI from "@/modules/git/git-provider-api";
import { initialFrameworks } from "@/seeds/seed-frameworks";
import { connectRegistry } from "@/modules/registry/connect-registry";
import { existsSync, readdirSync } from "fs";
import { addInitialBareMetalCluster } from "@/seeds/seed-clusters";
import ClusterManager from "@/modules/k8s";
import { DB } from "@/modules/api/DB";
import path from "path";

export function testFlow1() {
	let wsId: string;

	it("Builder: DOCKER", async () => {
		const dockerVersion = await dxCmd(`docker version`);
		console.log("Current DOCKER version :>> \n", dockerVersion);
	});

	it("Builder: PODMAN", async () => {
		const podmanVersion = await dxCmd(`podman version`);
		console.log("Current PODMAN version :>> \n", podmanVersion);
	});

	it("Authenticate fake user #1 (admin)", async () => {
		// create user
		await createFakeUser(1);

		// query db
		const name = `Fake User 1`;
		let fakeUser1 = await userSvc.findOne({ name });
		expect(fakeUser1).toBeDefined();

		const userId = MongoDB.toString(fakeUser1._id);
		if (!userId) return;

		// first login (no workspace)
		const loginRes1 = await loginUser(userId);
		expect(loginRes1.user).toBeDefined();
		expect(loginRes1.user.token?.access_token).toBeDefined();
	}, 60000);

	it("Workspace #1: Create workspace", async () => {
		// query db
		const name = `Fake User 1`;
		let fakeUser1 = await userSvc.findOne({ name });

		const userId = MongoDB.toString(fakeUser1._id);
		if (!userId) return;

		// create workspace
		const ws = await createWorkspace(userId, `First Workspace`);
		expect(ws).toBeDefined();

		wsId = MongoDB.toString(ws._id);
		if (!wsId) return;

		// reload fake user
		fakeUser1 = await getCurrentUser();

		// check user data
		expect(Array.isArray(fakeUser1.workspaces)).toBe(true);
		expect(fakeUser1.workspaces).toContain(wsId);

		// second login (has workspace)
		const loginRes = await loginUser(userId, wsId);

		// check user data after login
		expect(loginRes.user).toBeDefined();
		expect(loginRes.workspace).toBeDefined();
		expect(loginRes.user._id).toEqual(fakeUser1._id);
		expect(loginRes.workspace._id).toEqual(ws._id);
		expect(loginRes.user.token?.access_token).toBeDefined();
		expect((loginRes.user.activeWorkspace as IWorkspace)._id).toEqual(wsId);
		expect((loginRes.user.activeRole as IRole).type).toEqual("admin");
	}, 60000);

	it("Workspace #1: Initial data", async () => {
		// current authenticated user:
		let fakeUser1 = await getCurrentUser();
		expect((fakeUser1.activeRole as IRole).type).toEqual("admin");

		// current workspace
		wsId = fakeUser1.activeWorkspace._id;
		const ws = (await workspaceSvc.findOne({ _id: wsId })) as IWorkspace;
		expect(ws).toBeDefined();

		// check 3 initial roles
		const initialRoles = await roleSvc.find({ workspace: wsId });
		// console.log("initialRoles :>> ", initialRoles);
		expect(initialRoles.length).toEqual(3);

		const roleNames = initialRoles.map((role) => (role as IRole).name);
		expect(roleNames).toContain("Administrator");
		expect(roleNames).toContain("Moderator");
		expect(roleNames).toContain("Member");

		// check default API key
		const apiKeys = await apiKeySvc.find({ workspaces: wsId }, { populate: ["roles"] });
		expect(apiKeys.length).toBeGreaterThan(0);

		const defaulApiKey = apiKeys[0];
		expect(defaulApiKey.roles.length).toBeGreaterThan(0);
		expect(defaulApiKey.roles.map((role) => (role as IRole).name)).toContain("Moderator");

		// check default service account
		const serviceAccounts = await serviceAccountSvc.find({ workspaces: wsId }, { populate: ["roles"] });
		expect(serviceAccounts.length).toBeGreaterThan(0);

		const defaulSvcAcc = apiKeys[0];
		expect(defaulSvcAcc.roles.length).toBeGreaterThan(0);
		expect(defaulSvcAcc.roles.map((role) => (role as IRole).name)).toContain("Moderator");
	}, 60000);

	it("Workspace #1: Git Provider - Bitbucket", async () => {
		const curUser = await getCurrentUser();

		// seed git provider: bitbucket
		const createRes = await gitCtl.create({
			name: "Bitbucket",
			type: "bitbucket",
			isOrg: true,
			org: process.env.TEST_BITBUCKET_ORG,
			bitbucket_oauth: {
				username: process.env.TEST_BITBUCKET_USER,
				app_password: process.env.TEST_BITBUCKET_APP_PASS,
			},
		});

		// verify bitbucket api
		let bitbucket = createRes.data as IGitProvider;
		bitbucket = await gitSvc.verify(bitbucket);

		// check...
		expect(bitbucket.owner).toEqual(curUser._id);
		expect(bitbucket.owner).toBeDefined();
		expect(bitbucket.verified).toBe(true);
		expect(bitbucket.host).toBe("bitbucket.org");
		expect(bitbucket.isOrg).toBeTruthy();
		expect(bitbucket.org).toBeDefined();

		// test api
		const profile = await GitProviderAPI.getProfile(bitbucket);
		expect(profile).toBeDefined();
		expect(profile.username).toBe(process.env.TEST_BITBUCKET_USER);
	}, 60000);

	it("Workspace #1: Git Provider - Github", async () => {
		const curUser = await getCurrentUser();
		// seed git provider: github
		const createRes = await gitCtl.create({
			name: "Github",
			type: "github",
			isOrg: true,
			org: process.env.TEST_GITHUB_ORG,
			github_oauth: {
				personal_access_token: process.env.TEST_GITHUB_PAT,
			},
		});

		// verify github api
		let github = createRes.data as IGitProvider;
		github = await gitSvc.verify(github);

		// check...
		expect(github.owner).toEqual(curUser._id);
		expect(github.verified).toBe(true);
		expect(github.host).toBe("github.com");
		expect(github.isOrg).toBeTruthy();
		expect(github.org).toBeDefined();

		// test api
		const profile = await GitProviderAPI.getProfile(github);
		expect(profile).toBeDefined();
	}, 60000);

	it('Workspace #1: Add "public" framework', async () => {
		console.log('[TESTING] Workspace #1: Add "public" framework');
		const curUser = await getCurrentUser();

		// add new "public" framework
		frameworkCtl.user = curUser;
		frameworkCtl.workspace = curUser.activeWorkspace;

		const createRes = await frameworkCtl.create({
			name: "Static Site Starter with NGINX",
			repoURL: "https://github.com/digitopvn/static-nginx-site",
			repoSSH: "git@github.com:digitopvn/static-nginx-site.git",
			gitProvider: "github",
			mainBranch: "main",
			workspace: curUser.activeWorkspace._id,
		} as any);

		if (!createRes.status) throw new Error(createRes.messages.join("."));
		expect(createRes.status).toBe(1);

		// check...
		const fw = createRes.data as IFramework;
		expect(fw).toBeDefined();
	}, 30000);

	// it('Workspace #1: Add "private" framework', async () => {
	// 	const curUser = await getCurrentUser();

	// 	// add new "public" framework
	// 	const createRes = await frameworkCtl.create({
	// 		name: "Static Site Starter with NGINX",
	// 		repoURL: "https://github.com/digitopvn/static-nginx-site",
	// 		repoSSH: "git@github.com:digitopvn/static-nginx-site.git",
	// 		gitProvider: "github",
	// 		mainBranch: "main",
	// 	});

	// 	if (!createRes.status) console.log("FRAMEWORK > createRes :>> ", createRes);
	// 	expect(createRes.status).toBe(1);

	// 	const fw = createRes.data as IFramework;

	// 	// check...
	// 	expect(fw).toBeDefined();
	// }, 30000);

	let gcr: IContainerRegistry;

	it(
		"Workspace #1: Container Registry - Google Artifact Registry",
		async () => {
			console.log("[TESTING] Workspace #1: Container Registry - Google Artifact Registry");

			const curUser = await getCurrentUser();

			// seed Container Registry: GCR
			const createRes = await registryCtl.create({
				name: "Google Container Registry",
				provider: "gcloud",
				host: "asia.gcr.io",
				serviceAccount: process.env.TEST_GCLOUD_SERVICE_ACCOUNT,
			});

			gcr = createRes.data;
			expect(gcr).toBeDefined();
			expect(gcr.isVerified).toBe(true);

			// authenticate GCR with docker & podman
			await connectRegistry(gcr, { builder: "docker", workspaceId: wsId, userId: curUser._id });
			await connectRegistry(gcr, { builder: "podman", workspaceId: wsId, userId: curUser._id });

			// podman: pull private test image
			const podmanPullRes = await dxCmd(`podman pull asia.gcr.io/top-group-k8s/staticsite-web:20230616142326`);
			expect(podmanPullRes.indexOf("Storing signatures")).toBeGreaterThan(-1);

			// docker: pull private test image
			const dockerPullRes = await dxCmd(`docker pull asia.gcr.io/top-group-k8s/staticsite-web:20230616142326`);
			expect(dockerPullRes.indexOf("asia.gcr.io/top-group-k8s/staticsite-web")).toBeGreaterThan(-1);
		}, // timeout: 4 mins
		4 * 60000
	);

	it(
		"Workspace #1: Container Registry - Docker Hub Registry",
		async () => {
			console.log("[TESTING] Workspace #1: Container Registry - Docker Hub Registry");
			const curUser = await getCurrentUser();

			// seed Container Registry: Docker Hub
			const createRes = await registryCtl.create({
				name: "Docker Hub Registry",
				provider: "dockerhub",
				dockerUsername: process.env.TEST_DOCKERHUB_USER,
				dockerPassword: process.env.TEST_DOCKERHUB_PASS,
				organization: process.env.TEST_DOCKERHUB_ORG,
			});

			let dhr = createRes.data as IContainerRegistry;
			expect(dhr).toBeDefined();
			expect(dhr.isVerified).toBe(true);

			// authenticate GCR with docker & podman
			await connectRegistry(dhr, { builder: "docker", workspaceId: wsId, userId: curUser._id });
			await connectRegistry(dhr, { builder: "podman", workspaceId: wsId, userId: curUser._id });

			// podman: pull private test image
			const podmanPullRes = await dxCmd(`podman pull digitop/static:latest`);
			expect(podmanPullRes.indexOf("Storing signatures")).toBeGreaterThan(-1);

			// docker: pull private test image
			const dockerPullRes = await dxCmd(`docker pull digitop/static:latest`);
			expect(dockerPullRes.indexOf("digitop/static:latest")).toBeGreaterThan(-1);
		},
		// timeout: 4 mins
		4 * 60000
	);

	it("Workspace #1: Add Bare-metal K8S cluster", async () => {
		console.log("[TESTING] Workspace #1: Add Bare-metal K8S cluster");
		const curUser = await getCurrentUser();

		// seed cluster: Bare-metal
		const cluster = await addInitialBareMetalCluster(process.env.TEST_METAL_CLUSTER_KUBECONFIG, currentWorkspace, curUser);

		// verify cluster connection
		expect(cluster).toBeDefined();
		expect(cluster.contextName).toBeDefined();
		expect(cluster.provider).toBeDefined();
		expect(cluster.isVerified).toBe(true);
	}, 30000);

	it("CLI: Check version", async () => {
		console.log("[TESTING] CLI: Check version");
		const cliVersion = await dxCmd(`dx -v`);
		expect(cliVersion).toBeDefined();
	}, 15000);

	it("CLI: Authentication", async () => {
		console.log("[TESTING] CLI: Authentication");
		const user = await getCurrentUser();

		const stdout = await dxCmd(`dx login http://localhost:6969 --token=${user.token.access_token}`);
		expect(stdout.indexOf("You're logged in")).toBeGreaterThan(-1);

		// print CLI information
		await dxCmd(`dx info`);
	}, 15000);

	let bareMetalCluster: ICluster;

	it(
		"CLI: Cluster management (BARE-METAL)",
		async () => {
			console.log("[TESTING] CLI: Cluster management (BARE-METAL)");
			// get bare-metal cluster (default)
			bareMetalCluster = await clusterSvc.findOne({ providerShortName: "custom" });
			expect(bareMetalCluster.contextName).toBeDefined();
			expect(bareMetalCluster.provider).toBeDefined();
			expect(bareMetalCluster.isVerified).toBeTruthy();

			const context = bareMetalCluster.contextName;
			if (!context) throw new Error(`Cluster is not verifed (no "contextName")`);

			// switch context to this cluster
			const switchCtxRes = await dxCmd(`dx cluster connect --cluster=${bareMetalCluster.slug}`);
			expect(switchCtxRes.toLowerCase().indexOf("connected")).toBeGreaterThan(-1);

			// check test namespace exists
			const namespace = "diginext-test";
			let isNamespaceExisted = await ClusterManager.isNamespaceExisted(namespace, { context });
			if (isNamespaceExisted) await ClusterManager.deleteNamespace(namespace, { context });
			await ClusterManager.createNamespace(namespace, { context });

			// check again
			isNamespaceExisted = await ClusterManager.isNamespaceExisted(namespace, { context });
			expect(isNamespaceExisted).toBeTruthy();

			// create imagePullSecrets
			const dockerhub = await DB.findOne("registry", { provider: "dockerhub" });
			// console.log("dockerhub :>> ", dockerhub);

			// const createIPS = await dxCmd(`dx registry allow --registry=${dockerhub.slug} --cluster=${cluster.slug} --namespace=${namespace}`);
			// console.log("createIPS :>> ", createIPS);

			// const secrets = await dxCmd(`kubectl get secret -n ${namespace}`);
			// console.log("secrets :>> ", secrets);

			// expect(secrets).toContain("docker-registry-key");

			// clean up test namespace
			await ClusterManager.deleteNamespace(namespace, { context });
		},
		// timeout: 3 mins
		3 * 60000
	);

	let appOnGithub: IApp;
	let appOnBitbucket: IApp;

	it(
		"CLI: Create new app (Github)",
		async () => {
			console.log("[TESTING] CLI: Create new app (Github)");
			const github = await gitSvc.findOne({ type: "github" });
			const framework = await frameworkSvc.findOne({ repoURL: initialFrameworks[0].repoURL });

			// create new app...
			const res = await dxCmd(`dx new --projectName=TestGithubProject --name=web --framework=${framework.slug} --git=${github.slug} --force`);

			expect(res).toBeDefined();
			// expect(res.toLowerCase()).not.toContain("error");

			const sourceCodeDirs = readdirSync(CLI_TEST_DIR);
			console.log("sourceCodeDirs :>> ", sourceCodeDirs);
			expect(sourceCodeDirs.join(",").indexOf(`testgithubproject`)).toBeGreaterThan(-1);

			const appDir = path.resolve(CLI_TEST_DIR, "testgithubproject-web");
			const sourceCodeFiles = readdirSync(appDir);
			console.log("sourceCodeFiles :>> ", sourceCodeFiles);
			expect(sourceCodeFiles.length).toBeGreaterThan(0);

			// reload app's data
			appOnGithub = await appSvc.findOne({}, { order: { createdAt: -1 } });
		},
		5 * 60000
	);

	it(
		"CLI: Create new app (Bitbucket)",
		async () => {
			console.log("[TESTING] CLI: Create new app (Bitbucket)");

			const bitbucket = await gitSvc.findOne({ type: "bitbucket" });
			const framework = await frameworkSvc.findOne({ repoURL: initialFrameworks[0].repoURL });

			// create new app...
			const res = await dxCmd(
				`dx new --projectName=TestBitbucketProject --name=web --framework=${framework.slug} --git=${bitbucket.slug} --force`
			);
			expect(res).toBeDefined();
			// expect(res.toLowerCase()).not.toContain("error");

			const files = readdirSync(CLI_TEST_DIR);
			console.log("files :>> ", files);
			expect(files.join(",").indexOf(`testbitbucketproject`)).toBeGreaterThan(-1);

			// assign variable
			appOnBitbucket = await appSvc.findOne({}, { order: { createdAt: -1 } });
		},
		// 5 mins
		5 * 60000
	);

	it(
		"CLI: Request server to deploy app",
		async () => {
			console.log("[TESTING] CLI: Request server to deploy app");

			if (!appOnGithub || !bareMetalCluster) throw new Error(`Failed to request deploy: no apps or clusters.`);

			// get app directory
			const appDir = path.resolve(CLI_TEST_DIR, "testgithubproject-web");
			console.log("appDir :>> ", appDir);
			expect(existsSync(appDir)).toBeTruthy();

			const exposedPort = 80;
			/**
			 * Deploy app to dev environment:
			 * - App directory: "app created on github"
			 * - Cluster: Bare-metal Cluster
			 * - Container registry: Google Artifact Registry
			 * - Exposed port: 80
			 * - Use SSL: true
			 * - SSL Provider: Let's Encrypt
			 * - Use genereted domain: true
			 * - Follow the logs
			 */
			const res = await dxCmd(
				`dx deploy --cluster=${bareMetalCluster.slug} --registry=${gcr.slug} --port=${exposedPort} --ssl --domain --tail`,
				{ cwd: appDir }
			);
			// dx deploy --cluster=topgroup-k3s --registry=google-container-registry --port=80 --ssl --domain --tail
			// expect(res).toBeDefined();
			// expect(res.toLowerCase()).not.toContain("error");

			// get app info
			const app = await appSvc.findOne({ _id: appOnGithub._id });
			// console.log("Request deploy > app :>> ", app);
			expect(app.buildNumber).toBeDefined();
			expect(app.deployEnvironment).toBeDefined();
			expect(app.deployEnvironment.dev).toBeDefined();
			expect(app.deployEnvironment.dev.cluster).toEqual(bareMetalCluster.slug);
			expect(app.deployEnvironment.dev.registry).toEqual(gcr.slug);
			expect(app.deployEnvironment.dev.port).toEqual(exposedPort);
		},
		// timeout: 5 minutes
		5 * 60000
	);

	it("Workspace #1: Add member", async () => {
		console.log("[TESTING] CLI: Add member");

		// registerr fake user #2:
		let fakeUser2 = await createFakeUser(2);

		// login to workspace #1
		const loginRes = await loginUser(MongoDB.toString(fakeUser2._id), wsId);

		// reload user
		fakeUser2 = loginRes.user;
		expect((fakeUser2.activeRole as IRole).type).toEqual("member");

		// login back to fake user #1
	});

	it(
		"CLEAN UP: delete test data (eg. app, deployment, kube_config,...)",
		async () => {
			console.log("[TESTING] CLEAN UP: delete test data (eg. app, deployment, kube_config,...)");

			// delete & take down all test app
			await appSvc.takeDown(appOnGithub);

			// delete all "custom" test clusters & access credentials
			const clusters = await clusterSvc.find({ providerShortName: "custom" });
			await Promise.all(clusters.map((cluster) => clusterSvc.delete({ _id: cluster._id })));
		},
		// timeout: 5 mins
		5 * 60000
	);
}
