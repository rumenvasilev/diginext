import { logError, logSuccess } from "diginext-utils/dist/console/log";
import inquirer from "inquirer";
import { isEmpty, trimEnd } from "lodash";
import open from "open";

import { getCliConfig, saveCliConfig } from "@/config/config";
import type User from "@/entities/User";
import type { AccessTokenInfo } from "@/entities/User";
import type Workspace from "@/entities/Workspace";
import type InputOptions from "@/interfaces/InputOptions";
import { fetchApi } from "@/modules/api/fetchApi";
import { MongoDB } from "@/plugins/mongodb";

interface CliLoginOptions {
	/**
	 * URL of the build server, specify with the second action of CLI
	 */
	secondAction?: string;

	/**
	 * URL of the build server, specify with `--url` flag
	 */
	url?: string;

	/**
	 * The access token to authenticate, specify with `--token` or `--key` flag
	 */
	accessToken?: string;
}

export const cliLogin = async (options: CliLoginOptions) => {
	const { secondAction, url, accessToken } = options;

	const { buildServerUrl: currentServerUrl } = getCliConfig();

	let access_token = accessToken;

	let buildServerUrl = url ?? secondAction ?? currentServerUrl;
	if (!buildServerUrl) {
		logError(`Please provide your build server URL: "dx login <workspace_url>" or "dx login --help". Eg. https://build.example.com`);
		return;
	}

	const tokenDisplayUrl = `${buildServerUrl}/cli`;
	const cliConfig = saveCliConfig({
		buildServerUrl: trimEnd(buildServerUrl.indexOf(":3000") > -1 ? buildServerUrl.replace(/3000/, "6969") : buildServerUrl, "/"),
	});

	// open login page of build server:
	if (!access_token) open(tokenDisplayUrl);

	if (!access_token) {
		const { inputAccessToken } = await inquirer.prompt<{ inputAccessToken: string }>([
			{
				type: "password",
				name: "inputAccessToken",
				message: "Enter your access token:",
				validate: function (value) {
					if (value.length) {
						return true;
					} else {
						return `Access token is required.`;
					}
				},
			},
		]);
		access_token = inputAccessToken;
	}

	let currentUser: User;

	// validate the "access_token" -> get "userId":
	const { status, data } = await fetchApi<User>({ url: `/auth/profile`, access_token });
	if (status === 0) {
		logError(`Authentication failed, "access_token" is not valid.`);
		return;
	}
	currentUser = data as User;

	// "access_token" is VALID -> save it to local machine!
	saveCliConfig({ access_token, currentWorkspace: currentUser.activeWorkspace as Workspace });

	const { workspaces = [], activeWorkspace } = currentUser;
	let currentWorkspace;

	// If no workspace existed, throw error! (because workspace creation flow is on the admin UI)
	if (workspaces.length < 1) {
		logError(
			`This account isn't integrated with any workspaces. Select or create one here: ${buildServerUrl}/workspace/select?redirect_url=${buildServerUrl}/cli`
		);
		return;
	}

	currentWorkspace = activeWorkspace;

	if (!currentUser.token) currentUser.token = {} as AccessTokenInfo;
	currentUser.token.access_token = access_token;

	// save this user & workspace to CLI config
	saveCliConfig({ currentUser, currentWorkspace });

	logSuccess(`Hello, ${currentUser.name}! You're logged into "${currentWorkspace.name}" workspace.`);

	return currentUser;
};

export const cliLogout = async () => {
	saveCliConfig({
		access_token: null,
		currentUser: null,
		currentWorkspace: null,
	});

	return logSuccess(`You're logged out.`);
};

export async function cliAuthenticate(options: InputOptions) {
	let accessToken, workspace: Workspace, user: User;
	const { access_token: currentAccessToken, buildServerUrl } = getCliConfig();
	accessToken = currentAccessToken;
	// workspace = currentWorkspace;

	const continueToLoginStep = async (url) => {
		options.url = url;
		const _user = await cliLogin(options);

		if (!_user) {
			logError(`Failed to login: User not found.`);
			return;
		}

		if (_user.token?.access_token) accessToken = _user.token.access_token;

		return _user;
	};

	if (!accessToken && buildServerUrl) {
		user = await continueToLoginStep(buildServerUrl);
		if (!user) return;
	}

	const {
		status,
		data: userData,
		messages,
	} = await fetchApi<User>({
		url: `/auth/profile`,
		access_token: accessToken,
	});
	user = userData as User;

	if (!status || isEmpty(user)) {
		// don't give up, keep trying...
		if (buildServerUrl) user = await continueToLoginStep(buildServerUrl);
	}

	if (user.token?.access_token) saveCliConfig({ access_token: user.token.access_token });

	// Assign user & workspace to use across all CLI commands
	options.userId = MongoDB.toString(user._id);
	options.username = user.username ?? user.slug;
	options.workspace = user.activeWorkspace as Workspace;
	options.workspaceId = MongoDB.toString(options.workspace._id);

	// Save "currentUser" & "access_token" for next API requests
	saveCliConfig({ currentUser: user, currentWorkspace: options.workspace });

	return user;
}

export default { cliLogin, cliLogout, cliAuthenticate };
