import { ISpecialty } from "../models/Specialty";
import { BaseDatabase } from "./BaseDatabase";


export class SpecialtiesDb extends BaseDatabase {
    TABLE_NAME = 'Specialties';

    public async setNewObject(specialty: ISpecialty) {
        super.setNewObject(specialty)
    }
};