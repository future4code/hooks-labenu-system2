import { Request, Response } from "express";
import { StudentDb } from "../database/StudentDatabase";

export const getStudentByName = async (req: Request, res: Response) => {
    let errorCode = 500;

    try {
        const name = req.query.name as string;
        if (!name) {
            errorCode = 400;
            throw new Error ("No search parameters were provided.");  
        };

        const student = await new StudentDb().getObjectBySpecifics("name", name);

        res.status(200).send("Our best match for your seach:" + student);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};