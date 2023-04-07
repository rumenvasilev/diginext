import { log } from "diginext-utils/dist/console/log";
import listEndpoints from "express-list-endpoints";
import { isEmpty, upperFirst } from "lodash";

import type { RouteDto } from "@/entities/Route";
import Route from "@/entities/Route";
import type { RequestMethodType } from "@/interfaces/SystemTypes";
import { app } from "@/server";

import { DB } from "../modules/api/DB";

export const migrateAllRoutes = async () => {
	// get routes from the database
	let routes = await DB.find<Route>("route");

	// get all routes of Express
	const expressRoutes = listEndpoints(app).filter((r) => r.path.indexOf("/empty") === -1 && r.path.indexOf("/auth") === -1);
	// console.log("expressRoutes >>", expressRoutes);

	// compare database's routes with all routes of Express
	const missingRoutes = expressRoutes
		.filter((exr) => typeof routes.find((route) => route.path === exr.path) === "undefined")
		.map((exr) => {
			const generatedName = upperFirst(exr.path.replace("/api/v1/", "").split("/").join(" ").split("-").join(" ").split("_").join("-"));
			return new Route({ name: generatedName, path: exr.path, methods: exr.methods as RequestMethodType[] });
		});

	if (!isEmpty(missingRoutes)) {
		log(`[MIGRATION] migrateAllRoutes > Found ${missingRoutes.length} missing routes.`);

		const results = (await Promise.all(missingRoutes.map(async (route) => DB.create<Route>("route", route)))).filter(
			(item) => typeof item !== "undefined"
		);

		log(`[MIGRATION] migrateAllRoutes > FINISH MIGRATION >> Created ${results.length} missing routes.`);
	}

	// compare methods of database routes with methods of Express routes
	routes = await DB.find<Route>("route"); // <-- fetch database routes again to get latest ones
	const updateRoutes = expressRoutes
		.filter((exr) => {
			const _route = routes.find((route) => route.path === exr.path);
			if (!_route) return false;

			const routeMethods = _route.methods.join(",").toUpperCase();
			const expRouteMethods = exr.methods.join(",").toUpperCase();
			if (routeMethods !== expRouteMethods)
				log(`[MIGRATION] migrateAllRoutes > Update "${_route.path}" route's methods from [${routeMethods}] to [${expRouteMethods}]`);

			return routeMethods !== expRouteMethods;
		})
		.map((exr) => {
			return { path: exr.path, methods: exr.methods as RequestMethodType[] } as RouteDto;
		});

	if (!isEmpty(updateRoutes)) {
		log(`[MIGRATION] migrateAllRoutes > Found ${updateRoutes.length} routes that need to update methods.`);

		const results = (
			await Promise.all(updateRoutes.map(async (updateData) => DB.update<Route>("route", { path: updateData.path }, updateData)))
		).filter((items) => typeof items !== "undefined" && !isEmpty(items));

		log(`[MIGRATION] migrateAllRoutes > Update methods of ${results.length} routes.`);
	}
};