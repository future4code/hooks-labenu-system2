import { User } from "./User";

export class Student extends User {
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