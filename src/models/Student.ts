import { IUser } from "./User";

export class IStudent extends IUser {
    constructor(
        id: string,
        name: string,
        email: string,
        dOb: Date,
        protected course_id: string
    ){
        super(
            id,
            name,
            email,
            dOb
        )
    } 
};