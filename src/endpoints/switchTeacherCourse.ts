import { Request, Response } from "express";
import { TeacherDb } from "../database/TeacherDatabase";
import { ITeacher } from "../models/Teacher";

export const switchTeacherCourse = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const {id, course_name} = req.query;


        if (!id || !course_name) throw new Error("Must inform course name and teacher ID.");

        const findTeacher: ITeacher[] = await new TeacherDb().getObjectBySpecifics("id", id as string);        
        

        if (!findTeacher.length) {
            errorCode = 404;
            throw new Error("No teachers registered under the provided ID.");
        } else if (findTeacher[0].getCourse()  === course_name as string) {
            errorCode = 406;
            throw new Error("Desired course matches current course.");
        };

        await new TeacherDb().setUpdate("id", id, "course_name", course_name);

        res.status(200).send({ message: "Teacher reassigned to course", course_name: course_name });
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};