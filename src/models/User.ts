export abstract class IUser {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected dOb: Date,
    ){}
    
    public getId(){
        return this.id
    }
};