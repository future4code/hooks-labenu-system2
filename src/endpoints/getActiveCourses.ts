import { Request, Response } from "express";
import { CourseDb } from "../database/CourseDatabase";

export const getActiveCourses = async (req: Request, res: Response) => {
    let errorCode = 500;

    try {
        const activeCourses = await new CourseDb().getActiveCourses();

        res.status(200).send({  activeCourses });
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};