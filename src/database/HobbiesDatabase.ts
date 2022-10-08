import { IHobby } from "../models/Hobby";
import { BaseDatabase } from "./BaseDatabase";


export class HobbiesDb extends BaseDatabase {
    TABLE_NAME = 'Hobbies';

    public async setNewObject(hobby: IHobby) {
        super.setNewObject(hobby)
    }
};