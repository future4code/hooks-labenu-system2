import { ITeacher } from "../models/Teacher";
import { BaseDatabase } from "./BaseDatabase";


export class TeacherDb extends BaseDatabase {
    TABLE_NAME = 'LabeTeachers';


    public async setNewObject(teacher: ITeacher) {
        super.setNewObject(teacher)
    }

    public async getObjectBySpecifics(column: string, email: string) {
        return super.getObjectBySpecifics(column, email)
    }

    public async setUpdate(WProp: string, WValue: any, UProp: string, UValue: any) {
        super.setUpdate(WProp, WValue, UProp, UValue)
    }

    public async getAllTeachers() {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()

        return result
    }
};