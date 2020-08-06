import { Request, Response } from "express";
import database from "../database/connection";
import convertHoursInMinutes from "../utils/convertHoursInMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface Filters {
  time: string;
  subject: string;
  week_day: string;
}

class classController {
  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
    const transaction = await database.transaction();

    try {
      const insertedUserIds = await transaction("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUserIds[0];

      const insertedClassesIds = await transaction("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursInMinutes(scheduleItem.from),
          to: convertHoursInMinutes(scheduleItem.to),
        };
      });

      await transaction("class_schedule").insert(classSchedule);

      await transaction.commit();

      return res.status(201).json({ eror: "A new class has created" });
    } catch (error) {
      await transaction.rollback();
      return res
        .status(400)
        .json({ eror: "Unexpected error while creating new class" });
    }
  }

  async index(req: Request, res: Response) {
    const { subject, week_day, time } = (req.query as unknown) as Filters;

    if (!subject || !week_day || !time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHoursInMinutes(time);

    const classes = await database("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id`=`classes`.`id`")
          .whereRaw("`class_schedule`.`week_day`=??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to`>??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.json({ classes });
  }
}

export default new classController();
