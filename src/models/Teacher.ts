import { IUser } from "./User";

export class ITeacher extends IUser {
    constructor(
        id: string,
        name: string,
        email: string,
        private course_name: string
    ){
        super(
            id,
            name,
            email
        )
    }
   
};