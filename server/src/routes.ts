import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "ok" });
});

export default routes;
