import { IUser } from "./User";

export class IStudent extends IUser {
    public constructor(
        id: string,
        name: string,
        email: string,
        dOb: Date,
        private course_id: string
    ){
        super(
            id,
            name,
            email,
            dOb
        )
    } 

    public getCourse_id() {
        return this.course_id
    }
};