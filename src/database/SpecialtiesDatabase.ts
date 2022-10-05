import { Specialty } from "../models/Specialty";
import { BaseDatabase } from "./BaseDatabase";


export class SpecialtiesDb extends BaseDatabase {
    TABLE_NAME = 'Specialties';

    
    public setNewObject = async(specialty: Specialty): Promise<void> => {
        super.setNewObject(specialty)
    };
};