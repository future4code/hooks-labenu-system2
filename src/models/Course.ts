export class ICourse {
    constructor(
        private id: string,
        private name: string,
        private module: number
    ){
        this.id = id,
        this.name = name,
        this.module = module
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getModule(){
        return this.module
    }

    setId(newId: string){
        this.id = newId
    }

    setName(newName: string){
        this.name = newName
    }

    setModule(newModule: number){
        this.module = newModule
    }
};