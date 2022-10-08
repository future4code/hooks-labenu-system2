import { Request, Response } from "express";
import { StudentDb } from "../database/StudentDatabase";
import { IStudent } from "../models/Student";

export const getStudentByName = async (req: Request, res: Response) => {
    let errorCode = 500;

    try {
        const name = req.query.name as string;
        if (!name) {
            errorCode = 400;
            throw new Error("No search parameters were provided.");
        };

        const student: IStudent[] = await new StudentDb().getObjectBySpecifics("name", name);

        if (!student.length) {
            errorCode = 404;
            throw new Error ("No users found.");
        }

        res.status(200).send({ message: "Our best match for your seach:", student: student });
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};