export abstract class IUser {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
    ){}
    
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getEmail(){
        return this.email
    }   
};