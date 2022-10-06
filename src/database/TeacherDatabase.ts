import { ITeacher } from "../models/Teacher";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDb extends BaseDatabase {
  TABLE_NAME = "LabeTeachers";

  public setNewObject = async (teacher: ITeacher): Promise<void> => {
    super.setNewObject(teacher);
  };

  public getObjectBySpecifics = async (
    email: string,
    search: string
  ): Promise<ITeacher> => {
    return super.getObjectBySpecifics(email, search);
  };
  public setUpdate = async (
    WProp: string,
    WValue: any,
    UProp: string,
    UValue: any
  ): Promise<void> => {
    super.setUpdate(WProp, WValue, UProp, UValue);
  };
  public getAllTeachers = async (): Promise<ITeacher[]> => {
    const result = await BaseDatabase.connection(this.TABLE_NAME).select();

    return result;
  };
}