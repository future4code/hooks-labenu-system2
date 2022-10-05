import { Request, Response } from "express";
import {v4 as generateId} from 'uuid';
import { HobbiesDb } from "../database/HobbiesDatabase";
import { StudentDb } from "../database/StudentDatabase";
import { Hobby } from "../models/Hobby";
import { Student } from "../models/Student";

export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const {name, email, dOb, course_id, hobby} = req.body;
        const formatDoB = new Date(dOb.slice(6,10), dOb.slice(0,2), dOb.slice(3,5));

        if(!name || !email || !email.includes('@') || !formatDoB) throw new Error ("You must inform a name, valid e-mail and date of birth(MM/DD/YYYY).");

        const verifyEmail = await new StudentDb().getObjectBySpecifics("email", email);
        if (verifyEmail) {
            errorCode = 411;
            throw new Error ("E-mail already registered in our database.")
        };

        const newStudent = new Student(generateId(), name, email, formatDoB, course_id);
        const newHobby = new Hobby(generateId(), hobby, newStudent.getId());

        await new StudentDb().setNewObject(newStudent)
            .then(async () => await new HobbiesDb().setNewObject(newHobby));

        res.status(201).send("Congratulations! Here are the registration details, and you may add more hobbies later." + newStudent + newHobby);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};