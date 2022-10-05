import { Request, Response } from "express";
import { ICourse } from "../models/Course";
import {v4 as generateId} from 'uuid';
import { CourseDb } from "../database/CourseDatabase";

export const createCourse = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const {name, module} = req.body;
        const verifyName = await new CourseDb().getObjectBySpecifics("name", name);

        if(!name || !verifyName) throw new Error ("You must provide a unique name for the course. Please try again.");

        const newCourse = new ICourse(generateId(), name, module);

        await new CourseDb().setNewObject(newCourse);

        res.status(201).send("Congratulations! Here are the details of the course created:" + newCourse);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};