import { Request, Response } from "express";
import { StudentDb } from "../database/StudentDatabase";
import { IStudent } from "../models/Student";

export const switchStudentCourse = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const id = req.query.id as string;
        const course_id = req.body.course_id;

        if (!id || !course_id) throw new Error("Must inform course and student ID.");

        const findStudent: IStudent[] = await new StudentDb().getObjectBySpecifics("id", id);

        if (!findStudent) {
            errorCode = 404;
            throw new Error("No students registered under the provided ID.");
        } else if (findStudent[0].getCourse_id() === course_id) {
            errorCode = 406;
            throw new Error("Desired course matches current course.");
        };
        
        await new StudentDb().setUpdate("id", id, "course_id", course_id);

        res.status(200).send({ message: "Student transferred to course", course_id: course_id });
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};