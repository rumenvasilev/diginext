import { log } from "diginext-utils/dist/console/log";

import type { User } from "@/entities";
import { isObjectId } from "@/plugins/mongodb";

import { DB } from "../modules/api/DB";

export const migrateUserWorkspaces = async () => {
	let users = await DB.find<User>("user", { roles: undefined });

	users = users
		.map((user) => {
			const workspaces = (user.workspaces || []).filter((ws) => isObjectId(ws));

			if ((user.workspaces || []).length !== workspaces.length) {
				DB.update("user", { _id: user._id }, { workspaces });
				return user;
			}
		})
		.filter((user) => typeof user !== "undefined");

	log(`[MIGRATION] migrateUserWorkspaces() > FINISH MIGRATION >> Affected ${users.length} users.`);

	return users;
};