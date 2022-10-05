import { Course } from "../models/Course";
import { Hobby } from "../models/Hobby";
import { Specialty, TECHS } from "../models/Specialty";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";

export const baseStudents = [
    new Student("ABC", "Gina", "gi@gmail.com", new Date(1998, 11, 7), "A1"),
    new Student("DEF", "Nitchos", "pess@gmail.com", new Date(2018, 8, 25), "A2")
];

export const baseCourses = [
    new Course("A1", "Polimorfism", 4),
    new Course("A2", "Static and Abstract", 3)
];

export const baseTeachers = [
    new Teacher("ZZZ", "Rodrigo", "ro@lbn.com", new Date(1980, 1, 1), "Polimorfism" ),
    new Teacher("XXX", "PH", "phVasco@lbn.com", new Date(1980, 2, 2), "Static and Abstract")
];

export const baseHobbies = [
    new Hobby("1", "Bike", "DEF"),
    new Hobby("2", "Game", "ABC")
];

export const baseSpecialty = [
    new Specialty("haha", TECHS.JS, "XXX"),
    new Specialty("hihi", TECHS.TS, "ZZZ")
];