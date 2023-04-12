import { log, logWarn } from "diginext-utils/dist/console/log";
import { isEmpty } from "lodash";
import { Body, Delete, Get, Patch, Post, Queries, Route, Security, Tags } from "tsoa/dist";

import type { Project } from "@/entities";
import type { HiddenBodyKeys } from "@/interfaces";
import { IDeleteQueryParams, IGetQueryParams, IPostQueryParams } from "@/interfaces";
import type { ResponseData } from "@/interfaces/ResponseData";
import ClusterManager from "@/modules/k8s";
import { MongoDB } from "@/plugins/mongodb";
import AppService from "@/services/AppService";
import ProjectService from "@/services/ProjectService";

import BaseController from "./BaseController";

export type ProjectInputSchema = Omit<Project, keyof HiddenBodyKeys>;

@Tags("Project")
@Route("project")
export default class ProjectController extends BaseController<Project> {
	constructor() {
		super(new ProjectService());
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/")
	read(@Queries() queryParams?: IGetQueryParams) {
		return super.read();
	}

	@Security("api_key")
	@Security("jwt")
	@Post("/")
	create(@Body() body: ProjectInputSchema, @Queries() queryParams?: IPostQueryParams) {
		return super.create(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/")
	update(@Body() body: ProjectInputSchema, @Queries() queryParams?: IPostQueryParams) {
		return super.update(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Delete("/")
	async delete(@Queries() queryParams?: IDeleteQueryParams) {
		const project = await this.service.findOne(this.filter);
		if (!project) return { status: 0, messages: [`Project not found.`] } as ResponseData;

		const appSvc = new AppService();
		const apps = await appSvc.find({ project: project._id });

		// delete all apps relatively:
		if (!isEmpty(apps)) {
			apps.map(async (app) => {
				// also delete app's namespace on the cluster:
				Object.entries(app.deployEnvironment).map(async ([env, deployEnvironment]) => {
					if (!isEmpty(deployEnvironment)) {
						const { cluster, namespace } = deployEnvironment;
						try {
							await ClusterManager.authCluster(cluster);
							await ClusterManager.deleteNamespaceByCluster(namespace, cluster);
							log(`[PROJECT DELETE] ${app.slug} > Deleted "${namespace}" namespace on "${cluster}" cluster.`);
						} catch (e) {
							logWarn(`[PROJECT DELETE] ${app.slug} > Can't delete "${namespace}" namespace on "${cluster}" cluster:`, e);
						}
					}
				});

				// delete app in database:
				appSvc.softDelete({ _id: app._id });
			});
		}

		return super.delete();
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/with-apps")
	async getProjectsAndApps(@Queries() queryParams?: IGetQueryParams) {
		let projects = await this.service.find(this.filter, this.options, this.pagination);

		let result: ResponseData & { data: Project[] } = { status: 1, data: [], messages: [] };
		if (this.pagination) result = { ...result, ...this.pagination };

		// // assign refreshed token if any:
		// // TODO: this is not safe -> should use refresh token!
		// const { token } = req as any;
		// if (token) result.token = token;

		// populate apps
		const projectIDs = projects.map((p) => p._id);
		// console.log("projectIDs :>> ", projectIDs);

		const appSvc = new AppService();
		let apps = await appSvc.find({ project: { $in: projectIDs } }, this.options);
		// console.log("apps :>> ", apps);

		result.data = projects.map((p) => {
			const projectWithApps: Project = { ...p };
			projectWithApps.apps = apps.filter((a) => MongoDB.toString(a.project) === MongoDB.toString(p._id));
			return projectWithApps;
		});

		return result;

		// result.data = projectsWithApps;
		// return res.status(200).json(result);
		// return projectsWithApps;
		// return projectsWithApps;
	}
}
