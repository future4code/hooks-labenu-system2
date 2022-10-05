import { IHobby } from "../models/Hobby";
import { BaseDatabase } from "./BaseDatabase";


export class HobbiesDb extends BaseDatabase {
    TABLE_NAME = 'Hobbies';


    public setNewObject = async(hobby: IHobby): Promise<void> => {
        super.setNewObject(hobby)
    };
};