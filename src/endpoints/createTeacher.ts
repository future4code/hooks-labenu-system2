import { Request, Response } from "express";
import {v4 as generateId} from 'uuid';
import { TeacherDb } from "../database/TeacherDatabase";
import { ITeacher } from "../models/Teacher";
import { ISpecialty } from "../models/Specialty";
import { SpecialtiesDb } from "../database/SpecialtiesDatabase";


export const createTeacher = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const {name, email, dOb, course_name, specialty} = req.body;
        const formatDoB = new Date(dOb.slice(6,10), dOb.slice(0,2), dOb.slice(3,5));

        if(!name || !email || !email.includes('@') || !formatDoB || course_name) throw new Error ("You must inform a name, valid e-mail and date of birth(MM/DD/YYYY).");

        const verifyEmail = await new TeacherDb().getObjectBySpecifics("email", email);
        if (verifyEmail) {
            errorCode = 411;
            throw new Error ("E-mail already registered in our database.")
        };

        const newTeacher = new ITeacher(generateId(), name, email, formatDoB, course_name);
        const newSpecialty = new ISpecialty(generateId(), specialty, newTeacher.getId());

        await new TeacherDb().setNewObject(newTeacher)
            .then(async () => await new SpecialtiesDb().setNewObject(newSpecialty));

        res.status(201).send("Teacher and specialty created." + newTeacher + newSpecialty);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};