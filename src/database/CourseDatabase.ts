import { Course } from "../models/Course";
import { BaseDatabase } from "./BaseDatabase";


export class CourseDb extends BaseDatabase {
    TABLE_NAME = 'LabeCourses';


    public setNewObject = async(course: Course): Promise<void> => {
        super.setNewObject(course);
    };

    public getObjectBySpecifics = async(column: string, search: string): Promise<Course> => {
        return super.getObjectBySpecifics(column, search);
    };

    public getActiveCourses = async(): Promise<Course[]> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .whereNot("module", 0);
        
        return result;
    };

    public setUpdate = async (WProp: string, WValue: any, UProp: string, UValue: any): Promise<void> => {
        super.setUpdate(WProp, WValue, UProp, UValue)
    };
};