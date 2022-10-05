import { IStudent } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";


export class StudentDb extends BaseDatabase {
    TABLE_NAME = 'LabeStudents';


    public setNewObject = async(student: IStudent): Promise<void> => {
        super.setNewObject(student)
    };

    public getObjectBySpecifics = async(column: string, search: string): Promise<IStudent> => {
        return super.getObjectBySpecifics(column, search)
    };

    public setUpdate = async(WProp: string, WValue: any, UProp: string, UValue: any): Promise<void> => {
        super.setUpdate(WProp, WValue, UProp, UValue)
    };

};