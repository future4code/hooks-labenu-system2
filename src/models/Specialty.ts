export class ISpecialty {
    constructor(
        private id: string,
        private specialty: TECHS,
        private teacher_id: string
    ){}
};

export enum TECHS {
    JS= "JS",
    CSS = "CSS",
    React = "React",
    TS = "TS",
    OOP = "OOP"
};

