import { Router } from "express";
import ClassesController from "../src/controllers/ClassesController";
import ConnectionsController from "../src/controllers/ConnectionsController";

const routes = Router();

routes.post("/classes", ClassesController.create);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.create);
routes.get("/connections", ConnectionsController.index);

export default routes;
