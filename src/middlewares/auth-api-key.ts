import { Response as ApiResponse } from "diginext-utils/dist/response";
import type { NextFunction, Response } from "express";

import { DIGINEXT_DOMAIN } from "@/config/const";
import type { Workspace, WorkspaceApiAccessToken } from "@/entities";
import { User } from "@/entities";
import { DB } from "@/modules/api/DB";
import { getUnexpiredAccessToken } from "@/plugins";

export const mockUserOfApiAccessToken = (apiAccessToken: WorkspaceApiAccessToken, workspace: Workspace) => {
	const access_token = apiAccessToken.token;

	const mockedApiAccessTokenUser = new User();
	mockedApiAccessTokenUser._id = access_token;
	mockedApiAccessTokenUser.type = "api_key";
	mockedApiAccessTokenUser.name = mockedApiAccessTokenUser.slug = mockedApiAccessTokenUser.username = apiAccessToken.name;
	mockedApiAccessTokenUser.email = `${access_token}@${workspace.slug}.${DIGINEXT_DOMAIN}`;
	mockedApiAccessTokenUser.roles = apiAccessToken.roles;
	mockedApiAccessTokenUser.token = getUnexpiredAccessToken(access_token);
	mockedApiAccessTokenUser.active = true;
	mockedApiAccessTokenUser.workspaces = [workspace];
	mockedApiAccessTokenUser.activeWorkspace = workspace;
	mockedApiAccessTokenUser.createdAt = workspace.createdAt;
	mockedApiAccessTokenUser.updatedAt = workspace.updatedAt;

	return mockedApiAccessTokenUser;
};

export const apiAccessTokenHandler = async (req: any, res: Response, next: NextFunction) => {
	// console.log(`Handling API_ACCESS_TOKEN`, req.headers);

	// API_ACCESS_TOKEN will be transformed to lowercase in Express:
	const access_token = req.headers.api_access_token.toString();
	if (!access_token) return ApiResponse.rejected(res, "Authorization header missing");

	let user = await DB.findOne<User>(
		"api_key_user",
		{ "token.access_token": access_token },
		{ populate: ["workspaces", "activeWorkspace", "roles"] }
	);

	if (user) {
		// filter roles
		// [user] = await filterRole(user.activeWorkspace.toString(), [user]);

		// Set the flag to indicate that the user has been authenticated -> skip JWT
		req.user = user;
		req.isAuthenticated = true;

		next();
	} else {
		return ApiResponse.rejected(res, "API access token is invalid.");
	}

	// next();

	// return res.status(401).json({ message: "Invalid token" });
};