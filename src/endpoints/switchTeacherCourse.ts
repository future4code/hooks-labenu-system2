import { Request, Response } from "express";
import { TeacherDb } from "../database/TeacherDatabase";

export const switchTeacherCourse = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = req.query.id as string;
    const { course_id } = req.body;

    if (!id || !course_id)
      throw new Error("Must inform course and teacher ID.");

    const findTeacher = await new TeacherDb().getObjectBySpecifics("id", id);

    if (!findTeacher) {
      errorCode = 404;
      throw new Error("No students registered under the provided ID.");
    }

    await new TeacherDb().setUpdate("id", id, "course_id", course_id);

    res.status(200).send("Teacher transferred to course" + " " + course_id);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
