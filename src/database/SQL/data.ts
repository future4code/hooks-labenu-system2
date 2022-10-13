import { ICourse } from "../../models/Course";
import { IHobby } from "../../models/Hobby";
import { ISpecialty, TECHS } from "../../models/Specialty";
import { IStudent } from "../../models/Student";
import { ITeacher } from "../../models/Teacher";

export const baseStudents = [
    new IStudent("ABC", "Gina", "gi@gmail.com", new Date(1998, 11, 7), "A1"),
    new IStudent("DEF", "Nitchos", "pess@gmail.com", new Date(2018, 8, 25), "A2")
];

export const baseCourses = [
    new ICourse("Awaiting placement...", "Waitlist", 0),
    new ICourse("A1", "Polimorfism", 4),
    new ICourse("A2", "Static and Abstract", 3)
];

export const baseTeachers = [
    new ITeacher("ZZZ", "Rodrigo", "ro@lbn.com", new Date(1980, 1, 1), "Polimorfism"),
    new ITeacher("XXX", "PH", "phVasco@lbn.com", new Date(1980, 2, 2), "Static and Abstract")
];

export const baseHobbies = [
    new IHobby("1", "Bike", "DEF"),
    new IHobby("2", "Game", "ABC")
];

export const baseSpecialty = [
    new ISpecialty("haha", TECHS.JS, "XXX"),
    new ISpecialty("hihi", TECHS.TS, "ZZZ")
];