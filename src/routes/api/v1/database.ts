import express from "express";

import CloudDatabaseController from "@/controllers/CloudDatabaseController";
import { authenticate } from "@/middlewares/authenticate";

const router = express.Router();

const controller = new CloudDatabaseController();

router
	.use(controller.parsePagination.bind(controller))
	.use(controller.parseFilter.bind(controller))
	.use(controller.parseBody.bind(controller))
	.get(
		"/",
		authenticate,
		// authorize,
		controller.apiRespond(controller.read)
	)
	.post(
		"/",
		authenticate,
		// authorize,
		controller.apiRespond(controller.create)
	)
	.patch(
		"/",
		authenticate,
		// authorize,
		controller.apiRespond(controller.update)
	)
	.delete(
		"/",
		authenticate,
		// authorize,
		controller.apiRespond(controller.delete)
	)
	.delete(
		"/empty",
		authenticate,
		// authorize,
		controller.apiRespond(controller.empty)
	);

export default router;
