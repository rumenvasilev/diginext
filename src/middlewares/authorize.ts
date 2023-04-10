import { Response as ApiResponse } from "diginext-utils/dist/response";
import type { NextFunction, Response } from "express";

import type { Role, Workspace } from "@/entities";
import type { AppRequest } from "@/interfaces/SystemTypes";
import { filterRole } from "@/plugins/user-utils";

export async function authorize(req: AppRequest, res: Response, next: NextFunction) {
	let { user } = req;

	const { baseUrl: route, method } = req;
	// console.log("authorize > route :>> ", route);

	// filter roles
	const wsId = (user.activeWorkspace as Workspace)._id ? (user.activeWorkspace as Workspace)._id.toString() : user.activeWorkspace.toString();
	[user] = await filterRole(wsId, [user]);
	// console.log("authorize > user :>> ", user);

	// request permission:
	let requestPermission;
	switch (method.toLowerCase()) {
		case "post":
			requestPermission = "create";
			break;
		case "patch":
			requestPermission = "update";
			break;
		case "delete":
			requestPermission = "delete";
			break;
		default:
			requestPermission = "read";
			break;
	}

	// if the user doesn't have roles, reject the request!
	if (!user || !user.roles || user.roles.length == 0) return ApiResponse.rejected(res);

	let isAllowed = false;

	/**
	 * authorization logic here!
	 */
	// const { roles } = user;
	const roles = user.roles as Role[];
	const activeRole = roles.filter((role) => role.workspace.toString() === wsId)[0];

	// get "routes" -> find "key" as route & "value" as IRole
	// If wildcard "*" route is specified:
	activeRole.routes
		.filter((routeInfo) => routeInfo.route === "*")
		.map((routeInfo) => {
			if (routeInfo.permissions.includes(requestPermission)) {
				isAllowed = true;
			} else {
				// if permisions have "own" -> only have access to items which "owner" is "userID":
				if (routeInfo.permissions.includes("full")) {
					isAllowed = true;
				} else if (routeInfo.permissions.includes("own")) {
					req.query.owner = user._id.toString();
					isAllowed = true;
				} else {
					isAllowed = false;
				}
			}
		});

	// Check again if a specific route is specified:
	activeRole.routes
		.filter((routeInfo) => routeInfo.route === route)
		.map((routeInfo) => {
			if (routeInfo.permissions.includes(requestPermission)) {
				delete req.query.owner;
				isAllowed = true;
			} else {
				// if permisions have "own" -> only have access to items which "owner" is "userID":
				if (routeInfo.permissions.includes("full")) {
					delete req.query.owner;
					isAllowed = true;
				} else if (routeInfo.permissions.includes("own")) {
					req.query.owner = user._id.toString();
					isAllowed = true;
				} else {
					isAllowed = false;
				}
			}
		});

	// print the debug info
	console.log(
		`authorize > [${requestPermission}] ${route} > role :>> `,
		`[${activeRole.workspace}] ${activeRole.name}: ${activeRole.routes.map((r) => `${r.route} - ${r.permissions.join(",")}`).join("\n")}`,
		`>> ALLOW:`,
		isAllowed
	);
	if (!isAllowed) return ApiResponse.rejected(res);

	// always lock query filter to workspace scope

	if (req.baseUrl === "/api/v1/user" || req.baseUrl === "/api/v1/service_account" || req.baseUrl === "/api/v1/api_key") {
		req.query.workspaces = wsId;
	} else {
		req.query.workspace = wsId;
	}

	// re-assign user to express.Request
	req.user = user;
	req.role = activeRole;

	next();
}
