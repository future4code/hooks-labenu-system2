import { Request, Response } from "express";
import { TeacherDb } from "../database/TeacherDatabase";

export const getAllTeachers = async (req: Request, res: Response) => {
    let errorCode = 500;

    try {
        const faculty = await new TeacherDb().getAllTeachers();

        res.status(200).send("Meet our faculty and staff:" + faculty);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};