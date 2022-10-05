import { Teacher } from "../models/Teacher";
import { BaseDatabase } from "./BaseDatabase";


export class TeacherDb extends BaseDatabase {
    TABLE_NAME = 'LabeTeachers';


    public setNewObject = async(teacher: Teacher): Promise<void> => {
        super.setNewObject(teacher)
    };

    public getObjectBySpecifics = async(email: string, search: string): Promise<Teacher> => {
        return super.getObjectBySpecifics(email, search)
    }

    public getAllTeachers = async(): Promise<Teacher[]> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()
        
        return result
    }
};