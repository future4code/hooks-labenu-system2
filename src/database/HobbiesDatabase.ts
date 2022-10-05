import { Hobby } from "../models/Hobby";
import { BaseDatabase } from "./BaseDatabase";


export class HobbiesDb extends BaseDatabase {
    TABLE_NAME = 'Hobbies';


    public setNewObject = async(hobby: Hobby): Promise<void> => {
        super.setNewObject(hobby)
    };
};