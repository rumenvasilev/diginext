import chalk from "chalk";
import dayjs from "dayjs";
import humanizeDuration from "humanize-duration";

import { Config } from "@/app.config";
import { socketIO } from "@/server";

import type { DeployBuildOptions } from "../deploy/deploy-build";
import { deployBuild } from "../deploy/deploy-build";
import type { StartBuildParams } from "./build";
import { startBuild } from "./build";
import { sendLog } from "./send-log-message";

export const buildAndDeploy = async (buildParams: StartBuildParams, deployParams: DeployBuildOptions) => {
	// [1] Build container image
	const { build, startTime, SOCKET_ROOM } = await startBuild(buildParams);

	if (!build) return;

	const { appSlug, projectSlug } = build;
	const { env } = deployParams;

	// [2] Deploy the build to target deploy environment
	const { release, deployment } = await deployBuild(build, deployParams);

	if (!release) return;

	const releaseId = release._id.toString();

	const { endpoint, prereleaseUrl } = deployment;

	// [3] Print success information
	const endTime = dayjs();
	const buildDuration = endTime.diff(startTime, "millisecond");
	const humanDuration = humanizeDuration(buildDuration);

	sendLog({ SOCKET_ROOM, message: chalk.green(`🎉 FINISHED DEPLOYING AFTER ${humanDuration} 🎉`), type: "success" });

	if (env == "prod") {
		const buildServerUrl = Config.BASE_URL;
		const rollOutUrl = `${buildServerUrl}/project/?lv1=release&project=${projectSlug}&app=${appSlug}&env=prod`;

		sendLog({ SOCKET_ROOM, message: chalk.bold(chalk.yellow(`✓ Preview at: ${prereleaseUrl}`)), type: "success" });

		sendLog({
			SOCKET_ROOM,
			message: chalk.bold(chalk.yellow(`✓ Review & publish at: ${rollOutUrl}`)),
			type: "success",
		});

		sendLog({
			SOCKET_ROOM,
			message: chalk.bold(chalk.yellow(`✓ Roll out with CLI command:`), `$ dx rollout ${releaseId}`),
			type: "success",
		});
	} else {
		sendLog({ SOCKET_ROOM, message: chalk.bold(chalk.yellow(`✓ Check out your release at: ${endpoint}`)), type: "success" });
	}

	// disconnect CLI client:
	socketIO?.to(SOCKET_ROOM).emit("message", { action: "end" });

	return { build, release };
};