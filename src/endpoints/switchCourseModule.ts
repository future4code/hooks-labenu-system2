import { Request, Response } from "express";
import { CourseDb } from "../database/CourseDatabase";

export const switchCourseModule = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const id = req.query.id as string;
        const module = Number(req.body.module);
        
        if(!id || !module) throw new Error ("Must inform course id and desired module.");
        if (typeof module !== "number" ||  module > 6 || module < 0) throw new Error ("Module numbering ranges from 0-6.")

        const findCourse = await new CourseDb().getObjectBySpecifics("id", id);

        if (!findCourse) {
            errorCode = 404;
            throw new Error ("No courses registered under the provided ID.")
        }

        await new CourseDb().setUpdate("id", id, "module", module);

        res.status(202).send("Course module altered to" + " " + module);
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    };
};