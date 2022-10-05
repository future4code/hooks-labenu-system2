import { User } from "./User";

export class Teacher extends User {
    constructor(
        id: string,
        name: string,
        email: string,
        dOb: Date,
        protected course_name: string
    ){
        super(
            id,
            name,
            email,
            dOb
        )
    }
};