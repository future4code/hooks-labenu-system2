import { IStudent } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";


export class StudentDb extends BaseDatabase {
    TABLE_NAME = 'LabeStudents';


    public async setNewObject(student: IStudent) {
        super.setNewObject(student)
    }

    public async getObjectBySpecifics(column: string, value: string) {
        return super.getObjectBySpecifics(column, value)
    }

    public async setUpdate(WProp: string, WValue: any, UProp: string, UValue: any) {
        super.setUpdate(WProp, WValue, UProp, UValue)
    }

};