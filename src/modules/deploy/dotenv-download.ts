import { logSuccess } from "diginext-utils/dist/xconsole/log";
import { existsSync, unlinkSync, writeFileSync } from "fs";
import inquirer from "inquirer";
import path from "path";

import type { IApp } from "@/entities";
import { kubeEnvToDotenv } from "@/plugins";

import { getAppConfigFromApp } from "../apps/app-helper";
import { askForProjectAndApp } from "../apps/ask-project-and-app";
import { checkGitignoreContainsDotenvFiles } from "./dotenv-exec";

type DownloadDotenvOptions = {
	/**
	 * Location to write down the dotenv file
	 * @default process.cwd()
	 */
	targetDir?: string;
	/**
	 * Output file name
	 * @default `.env.{env}`
	 * @example ".env.dev" | ".env.prod"
	 */
	fileName?: string;
	/**
	 * Should overwrite the existing file
	 */
	overwrite?: boolean;
	isDebugging?: boolean;
};

export const getDotenvContentByApp = (app: IApp, env: string = "dev") => {
	const { deployEnvironment, slug: appSlug } = app;

	if (!deployEnvironment || !deployEnvironment[env])
		throw new Error(`Can't download dotenv variables to ".env.${env}" locally due to deploy environment of "${appSlug}" app not existed.`);

	const envVars = deployEnvironment[env].envVars || [];

	return kubeEnvToDotenv(envVars);
};

export const downloadDotenvByApp = async (app: IApp, env: string = "dev", options: DownloadDotenvOptions = {}) => {
	const { targetDir = process.cwd(), fileName = `.env.${env}`, overwrite } = options;
	const dotenvContent = getDotenvContentByApp(app, env);
	const filePath = path.resolve(targetDir, fileName);

	if (existsSync(filePath)) {
		if (!overwrite) {
			const { shouldOverwrite } = await inquirer.prompt({
				name: "shouldOverwrite",
				type: "confirm",
				default: true,
				message: `File "${fileName}" is existed, do you want to overwrite it?`,
			});

			if (shouldOverwrite) {
				unlinkSync(filePath);
			} else {
				throw new Error(`Download DOTENV of "${env}" deploy environment failed, local DOTENV file is existed.`);
			}
		} else {
			unlinkSync(filePath);
		}
	}

	writeFileSync(filePath, dotenvContent, "utf8");

	logSuccess(`Downloaded "./${fileName}" file from "${env}" deploy environment of "${app.slug}" app.`);

	return { filePath, fileName, content: dotenvContent };
};

export const downloadDotenvByAppSlug = async (appSlug: string, env: string = "dev", options: DownloadDotenvOptions = {}) => {
	const { DB } = await import("@/modules/api/DB");
	const app = await DB.findOne("app", { slug: appSlug });
	if (!app) throw new Error(`Can't download dotenv variables to ".env.${env}" locally due to "${appSlug}" app not existed.`);

	return downloadDotenvByApp(app, env, options);
};

export const downloadDotenv = async (env: string, options: DownloadDotenvOptions = {}) => {
	const { targetDir = process.cwd() } = options;

	const { app } = await askForProjectAndApp(targetDir, options);
	const appConfig = getAppConfigFromApp(app, options);
	const { slug: appSlug } = appConfig;

	if (!appSlug) {
		throw new Error(
			`Invalid working directory, the current deploy environment config on Diginext workspace might be corrupted, please re-initialize.`
		);
	}

	return downloadDotenvByAppSlug(appSlug, env, options).then(async (result) => {
		// [SECURITY CHECK] warns if DOTENV files are not listed in ".gitignore" file
		await checkGitignoreContainsDotenvFiles({ targetDir });
		return result;
	});
};
