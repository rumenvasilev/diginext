import { logError } from "diginext-utils/dist/console/log";
import { makeSlug } from "diginext-utils/dist/Slug";

import { getCliConfig } from "@/config/config";
import type { App, AppGitInfo } from "@/entities";
import type InputOptions from "@/interfaces/InputOptions";
import { initalizeAndCreateDefaultBranches } from "@/modules/git/initalizeAndCreateDefaultBranches";
import { getAppConfig, getCurrentGitRepoData } from "@/plugins";

import { DB } from "../api/DB";
import { generateRepoSSH, generateRepoURL, initializeGitRemote } from "../git";
import { printInformation } from "../project/printInformation";
import { generateAppConfig, writeConfig } from "../project/writeConfig";
import { createOrSelectApp } from "./create-or-select-app";
import { createOrSelectProject } from "./create-or-select-project";

export async function execInitApp(options: InputOptions) {
	const initProject = await createOrSelectProject(options);
	const initApp = await createOrSelectApp(initProject.slug, options);

	// ! The ONLY different with "createApp": Select the current working directory instead of create new one
	options.skipCreatingDirectory = true;
	if (typeof options.targetDirectory == "undefined") options.targetDirectory = process.cwd();

	// to make sure it write down the correct app "slug" in "dx.json"
	options.slug = initApp.slug;
	options.name = initApp.name;
	options.repoSlug = `${options.projectSlug}-${makeSlug(options.name)}`;
	// console.log("execInitApp > options.name :>> ", options.name);

	// get current GIT remote url:
	const currentGitData = await getCurrentGitRepoData(options.targetDirectory);
	const { remoteSSH, remoteURL, provider: gitProvider } = currentGitData || {};
	// console.log("{remoteSSH, remoteURL} :>> ", { remoteSSH, remoteURL });

	if (remoteSSH && remoteURL) {
		options.remoteSSH = remoteSSH;
		options.remoteURL = remoteURL;
		options.gitProvider = gitProvider;
	} else {
		// get default git provider from CLI config
		const { currentGitProvider } = getCliConfig();
		if (currentGitProvider?.gitWorkspace) {
			options.remoteSSH = generateRepoSSH(options.gitProvider, `${currentGitProvider.gitWorkspace}/${options.repoSlug}`);
			options.remoteURL = generateRepoURL(options.gitProvider, `${currentGitProvider.gitWorkspace}/${options.repoSlug}`);
		} else {
			logError(`No git providers in this workspace, please configurate one.`);
			return;
		}
	}
	options.repoURL = options.remoteURL;

	// git setup
	if (!remoteSSH) await initalizeAndCreateDefaultBranches(options);
	if (options.shouldUseGit && !remoteSSH) await initializeGitRemote(options);

	// update GIT info in the database
	const { framework } = options;
	const updateData = {} as App;
	if (framework) updateData.framework = framework;

	if (options.shouldUseGit) {
		updateData.git = {} as AppGitInfo;
		updateData.git.provider = options.gitProvider;
		updateData.git.repoURL = options.remoteURL;
		updateData.git.repoSSH = options.remoteSSH;
	}
	if (options.isDebugging) console.log("[INIT APP] updateData :>> ", updateData);

	const [updatedApp] = await DB.update<App>("app", { slug: initApp.slug }, updateData);
	if (options.isDebugging) console.log("[INIT APP] updatedApp :>> ", updatedApp);

	if (!updatedApp) logError(`[INIT APP] Can't initialize app due to network issue.`);

	// write "dx.json"
	const appConfig = generateAppConfig(options);
	await writeConfig(appConfig, options);

	// print project information:
	const finalConfig = getAppConfig(options.targetDirectory);
	printInformation(finalConfig);

	return options;
}