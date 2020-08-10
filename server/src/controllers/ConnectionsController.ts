import { Request, Response } from "express";
import database from "../database/connection";
import convertHoursInMinutes from "../utils/convertHoursInMinutes";

class ConnectionController {
  async create(req: Request, res: Response) {
    const { user_id } = req.body;
    await database("connections").insert({ user_id });
    return res.status(201).json({ message: "Link connection" });
  }

  async index(req: Request, res: Response) {
    const totalConnections = await database("connections").count("* as total");
    const { total } = totalConnections[0];
    return res.json({ total });
  }
}

export default new ConnectionController();
