export class ICourse {
    constructor(
        private id: string,
        private name: string,
        private module: number,
    ){}

    getName(){
        return this.name
    }
};