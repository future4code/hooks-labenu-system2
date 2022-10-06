import { Request, Response } from "express";
import {v4 as generateId} from 'uuid';
import { HobbiesDb } from "../database/HobbiesDatabase";
import { StudentDb } from "../database/StudentDatabase";
import { IHobby } from "../models/Hobby";
import { IStudent } from "../models/Student";

export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const {name, email, course_id, hobby} = req.body;


        if(!name || !email || !email.includes('@')) throw new Error ("You must inform a name, valid e-mail and date of birth(MM/DD/YYYY).");

        const verifyEmail = await new StudentDb().getObjectBySpecifics("email", email);
        if (verifyEmail) {
            errorCode = 411;
            throw new Error ("E-mail already registered in our database.")
        };

        const newStudent = new IStudent(generateId(), name, email, course_id);
        const newHobby = new IHobby(generateId(), hobby, newStudent.getId());

        await new StudentDb().setNewObject(newStudent)
            .then(async () => await new HobbiesDb().setNewObject(newHobby));

        res.status(201).send("Congratulations! Here are the registration details, and you may add more hobbies later." + newStudent + newHobby);
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
};