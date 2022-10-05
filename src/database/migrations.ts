import { connection } from "./connection";
import { baseCourses, baseHobbies, baseSpecialty, baseStudents, baseTeachers } from "./data";


const createTables = async (): Promise <void> => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS LabeCourses (
            	id VARCHAR(255) PRIMARY KEY,
            	name VARCHAR(255) UNIQUE NOT NULL,
                module INT DEFAULT 0
            );
            
            CREATE TABLE IF NOT EXISTS LabeTeachers (
            	id VARCHAR(255) PRIMARY KEY,
            	name VARCHAR(255) NOT NULL,
            	email VARCHAR(255) UNIQUE NOT NULL,
            	dOb DATE NOT NULL,
                course_name VARCHAR(255) NOT NULL,
                FOREIGN KEY (course_name) REFERENCES LabeCourses(name)
            );

            CREATE TABLE IF NOT EXISTS LabeStudents (
            	id VARCHAR(255) PRIMARY KEY,
            	name VARCHAR(255) NOT NULL,
            	email VARCHAR(255) UNIQUE NOT NULL,
            	dOb DATE NOT NULL,
                course_id VARCHAR(255) NOT NULL DEFAULT "Awaiting placement...",
                FOREIGN KEY (course_id) REFERENCES LabeCourses(id)
            );

            CREATE TABLE IF NOT EXISTS Hobbies (
                id VARCHAR(255) PRIMARY KEY,
                hobby VARCHAR(255) NOT NULL DEFAULT "I hunt ghosts in my free time! Booooh",
                student_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (student_id) REFERENCES LabeStudents(id)
            );

            CREATE TABLE IF NOT EXISTS Specialties (
                id VARCHAR(255) PRIMARY KEY,
                specialty ENUM("JS", "CSS", "React", "TS", "OOP") NOT NULL DEFAULT "JS",
                teacher_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (teacher_id) REFERENCES LabeTeachers(id)
            );
       	`)
            
        console.log("Tables successfully created.")	
    } catch (error: any) {
        printError(error)
    }
};

const populateTables = async(): Promise<void> => {
    try {
        await connection("LabeCourses")
            .insert(baseCourses)
            .then(() => console.log(`LabeCourses populated!`))
            .catch((error: any) => printError(error));
        
        await connection("LabeTeachers")
            .insert(baseTeachers)
            .then(() => console.log(`LabeTeachers populated!`))
            .catch((error: any) => printError(error));

        await connection("LabeStudents")   
            .insert(baseStudents)
            .then(() => console.log(`LabeStudents populated!`))
            .catch((error: any) => printError(error));

        await connection("Hobbies")
            .insert(baseHobbies)
            .then(() => console.log(`Hobbies populated!`))
            .catch((error: any) => printError(error));

        await connection("Specialties")
            .insert(baseSpecialty)
            .then(() => console.log(`Specialties populated!`))
            .catch((error: any) => printError(error));
      

        console.log("Tables successfully populated.")
    } catch (error) {
        console.log("Failed to populate table.")
        printError(error)
    };   
};

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
};


createTables()
.then(()=> populateTables())
.finally(()=> process.exit());