import { log } from "diginext-utils/dist/console/log";
import path from "path";
import { Body, Deprecated, Post, Queries, Route, Security, Tags } from "tsoa/dist";

import pkg from "@/../package.json";
import { Config } from "@/app.config";
import { CLI_CONFIG_DIR } from "@/config/const";
import type { IApp, IBuild, IUser, IWorkspace } from "@/entities";
import type { InputOptions, ResponseData } from "@/interfaces";
import { IPostQueryParams, respondFailure, respondSuccess } from "@/interfaces";
import { DB } from "@/modules/api/DB";
import type { StartBuildParams } from "@/modules/build";
import { buildAndDeploy } from "@/modules/build/build-and-deploy";
import { startBuildV1 } from "@/modules/build/start-build";
import type { DeployBuildOptions } from "@/modules/deploy/deploy-build";
import { deployWithBuildSlug } from "@/modules/deploy/deploy-build";

import BaseController from "./BaseController";

type DeployBuildInput = {
	/**
	 * Deploy environment
	 * @example "dev", "prod"
	 */
	env: string;
	/**
	 * User ID of the author
	 */
	author: string;
	/**
	 * [DANGER]
	 * ---
	 * Should delete old deployment and deploy a new one from scratch
	 * @default false
	 */
	shouldUseFreshDeploy?: boolean;
	/**
	 * ### FOR DEPLOY to PROD
	 * Force roll out the release to "prod" deploy environment (instead of "prerelease" environment)
	 * @default false
	 */
	forceRollOut?: boolean;
	/**
	 * ### WARNING
	 * Skip checking deployed POD's ready status.
	 * - The response status will always be SUCCESS even if the pod is unable to start up properly.
	 * @default false
	 */
	skipReadyCheck?: boolean;
};

@Tags("Deploy")
@Route("deploy")
export default class DeployController extends BaseController {
	/**
	 * ### [DEPRECATED SOON]
	 * #### Use `buildAndDeploy()` instead.
	 * Build container image first, then deploy that build to target deploy environment.
	 */
	@Security("api_key")
	@Security("jwt")
	@Post("/")
	@Deprecated()
	deployFromSource(@Body() body: { options: InputOptions }, @Queries() queryParams?: IPostQueryParams) {
		let { options: inputOptions } = body;

		// console.log("deployFromSource :>> ", body);

		// validation & conversion...
		if (!inputOptions) return { status: 0, messages: [`Deploy "options" is required.`] } as ResponseData;
		// if (!isJSON(inputOptions)) return { status: 0, messages: [`Deploy "options" is invalid (should be in JSON format).`] } as ResponseData;

		// const options = JSON.parse(inputOptions as string) as InputOptions;
		// log("[DEPLOY] options", options);

		// TODO: Save client CLI version to server database for tracking purpose!

		// check for version compatibility between CLI & SERVER:
		const cliVersion = inputOptions.version || "0.0.0";
		const breakingChangeVersionCli = cliVersion.split(".")[0];
		const serverVersion = pkg.version;
		const breakingChangeVersionServer = serverVersion.split(".")[0];

		if (breakingChangeVersionCli != breakingChangeVersionServer) {
			return {
				status: 0,
				messages: [
					`Your CLI version (${cliVersion}) is much lower than the BUILD SERVER version (${serverVersion}). Please upgrade: "dx update"`,
				],
			};
		}
		// return respondSuccess({ msg: `Building...` });

		log(`deployFromSource > options.buildNumber :>>`, inputOptions.buildNumber);
		startBuildV1(inputOptions);

		// start build in background:
		return respondSuccess({ msg: `Building...` });
	}

	/**
	 * Build container image first, then deploy that build to target deploy environment.
	 * - `Alias of "/api/v1/deploy/from-source"`
	 */
	@Security("api_key")
	@Security("jwt")
	@Post("/build-first")
	async buildAndDeploy(@Body() body: { buildParams: StartBuildParams; deployParams: DeployBuildInput }, @Queries() queryParams?: IPostQueryParams) {
		let { buildParams, deployParams } = body;

		// validation & conversion...
		if (!buildParams) return { status: 0, messages: [`Build "params" is required.`] } as ResponseData;
		if (!deployParams) return { status: 0, messages: [`Deploy "params" is required.`] } as ResponseData;

		const app = await DB.findOne<IApp>("app", { slug: buildParams.appSlug });
		const author = await DB.findOne<IUser>("user", { _id: deployParams.author }, { populate: ["activeWorkspace"] });
		const workspace = author.activeWorkspace as IWorkspace;
		const SOURCE_CODE_DIR = `cache/${app.projectSlug}/${app.slug}/${buildParams.gitBranch}`;
		const buildDirectory = path.resolve(CLI_CONFIG_DIR, SOURCE_CODE_DIR);

		const deployBuildOptions: DeployBuildOptions = {
			author,
			env: buildParams.env,
			shouldUseFreshDeploy: deployParams.shouldUseFreshDeploy,
			workspace,
			buildDirectory,
		};

		// check for version compatibility between CLI & SERVER:
		buildParams.cliVersion = buildParams.cliVersion || "0.0.0";
		const breakingChangeVersionCli = buildParams.cliVersion.split(".")[0];
		const serverVersion = pkg.version;
		const breakingChangeVersionServer = serverVersion.split(".")[0];

		if (breakingChangeVersionCli != breakingChangeVersionServer) {
			return {
				status: 0,
				messages: [
					`Your CLI version (${buildParams.cliVersion}) is much lower than the BUILD SERVER version (${serverVersion}). Please update your CLI with: "dx update"`,
				],
			};
		}

		log(`buildAndDeploy > buildParams.buildNumber :>>`, buildParams.buildNumber);
		buildAndDeploy(buildParams, deployBuildOptions);

		const { appSlug, buildNumber } = buildParams;
		const buildServerUrl = Config.BASE_URL;
		const SOCKET_ROOM = `${appSlug}-${buildNumber}`;
		const logURL = `${buildServerUrl}/build/logs?build_slug=${SOCKET_ROOM}`;

		// start build in background:
		return { messages: [`Building...`], status: 1, data: { logURL } };
	}

	/**
	 * Build container image first, then deploy that build to target deploy environment.
	 * - `Alias of "/api/v1/deploy/build-first"`
	 */
	@Security("api_key")
	@Security("jwt")
	@Post("/from-source")
	buildFromSourceAndDeploy(
		@Body() body: { buildParams: StartBuildParams; deployParams: DeployBuildInput },
		@Queries() queryParams?: IPostQueryParams
	) {
		return this.buildAndDeploy(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Post("/from-build")
	async deployFromBuild(
		@Body()
		body: {
			/**
			 * Build's slug
			 */
			buildSlug: string;
		} & DeployBuildInput,
		@Queries() queryParams?: IPostQueryParams
	) {
		const { buildSlug } = body;
		if (!buildSlug) return { status: 0, messages: [`Build "slug" is required`] };

		const build = await DB.findOne<IBuild>("build", { slug: buildSlug });
		const workspace = await DB.findOne<IWorkspace>("workspace", { _id: build.workspace });
		const author = this.user || (await DB.findOne<IUser>("user", { _id: body.author }));

		if (!author) return respondFailure({ msg: `Author is required.` });

		const SOURCE_CODE_DIR = `cache/${build.projectSlug}/${build.appSlug}/${build.branch}`;
		const buildDirectory = path.resolve(CLI_CONFIG_DIR, SOURCE_CODE_DIR);

		const deployBuildOptions: DeployBuildOptions = {
			author,
			env: body.env,
			shouldUseFreshDeploy: body.shouldUseFreshDeploy,
			workspace,
			buildDirectory,
			skipReadyCheck: body.skipReadyCheck,
			forceRollOut: body.forceRollOut,
		};
		console.log("deployBuildOptions :>> ", deployBuildOptions);

		// DEPLOY A BUILD:
		const result = await deployWithBuildSlug(buildSlug, deployBuildOptions);
		const { release } = result;

		if (!release) return { status: 0, messages: [`Failed to deploy from a build (${buildSlug}).`] };

		return { messages: [], status: 1, data: result };
	}

	// @Security("api_key")
	// @Security("jwt")
	// @Post("/from-image")
	// async deployFromImage(
	// 	@Body()
	// 	body: {
	// 		/**
	// 		 * Project's slug
	// 		 */
	// 		projectSlug: string;
	// 		/**
	// 		 * App's slug
	// 		 */
	// 		slug: string;
	// 		/**
	// 		 * @example "dev" | "prod"
	// 		 */
	// 		env?: string;
	// 		/**
	// 		 * CLI's version
	// 		 */
	// 		cliVersion?: string;
	// 		/**
	// 		 * Kubernetes Environment Variables in JSON Array
	// 		 * @example [ { "name": "TZ", "value": "Asia/Ho_Chi_Minh" } ]
	// 		 */
	// 		envVars?: string;
	// 	},
	// 	@Queries() queryParams?: IPostQueryParams
	// ) {
	// 	const { env, projectSlug, slug, envVars: envVarsStr, cliVersion } = body;
	// 	if (!projectSlug) return { status: 0, messages: [`Project "slug" is required`] };
	// 	if (!slug) return { status: 0, messages: [`App "slug" is required`] };

	// 	const appSvc = new AppService();
	// 	const app = await appSvc.findOne({ slug }, { populate: ["workspace"] });

	// 	if (!app) return { status: 0, messages: [`App "${slug}" not found.`] };

	// 	const appConfig = getAppConfigFromApp(app);

	// 	const envVars: KubeEnvironmentVariable[] = isJSON(envVarsStr) ? JSON.parse(envVarsStr) : [];

	// 	const params = {
	// 		projectSlug,
	// 		slug,
	// 		env,
	// 		envVars,
	// 		workspace: this.user?.activeWorkspace,
	// 		username: this.user?.slug,
	// 		workspaceId: app.workspace,
	// 		cliVersion,
	// 	} as DeployImageParams;

	// 	const result = await deployImage(params, appConfig, envVars);

	// 	if (!result) return { status: 0, messages: [`Failed to deploy from image URL.`] };

	// 	return { messages: [], status: 1, data: result };
	// }
}
