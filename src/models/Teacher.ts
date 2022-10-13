import { IUser } from "./User";

export class ITeacher extends IUser {
    constructor(
        id: string,
        name: string,
        email: string,
        dOb: Date,
        private course_name: string
    ){
        super(
            id,
            name,
            email,
            dOb
        )
    }

    public getCourse() {
        return this.course_name
    }
};