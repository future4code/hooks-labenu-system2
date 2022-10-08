import { Request, Response } from "express";
import { CourseDb } from "../database/CourseDatabase";
import { ICourse } from "../models/Course";

export const switchCourseModule = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const id = req.query.id;
        const module = Number(req.query.module);
        
        if (!id || !module) throw new Error("Must inform course id and desired module.");
        if (typeof module !== "number" || module > 6 || module < 0) throw new Error(
            "Module numbering ranges from 0-6."
        );

        const findCourse = await new CourseDb().getObjectBySpecifics("id", id as string);

        if (!findCourse.length) {
            errorCode = 404;
            throw new Error("No courses registered under the provided ID.");
        } else if (findCourse[0].getModule() === module) {
            errorCode = 406;
            throw new Error("Desired new module matches current module.");
        };

        await new CourseDb().setUpdate("id", id as string, "module", module);

        res.status(202).send({ message: "Course module altered to", module: module });
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    };
};