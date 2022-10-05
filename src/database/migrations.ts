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
                FOREIGN KEY (course_id) REFERENCES LabeCourse(id)
            );

            CREATE TABLE IF NOT EXISTS Hobbies (
                id VARCHAR(255) PRIMARY KEY,
                hobby VARCHAR(255) NOT NULL DEFAULT "I hunt ghosts in my free time! Booooh",
                student_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (student_id) REFERENCES LabeStudents(id)
            );

            CREATE TABLE IF NOT EXISTS Specialties (
                id VARCHAR(255) PRIMARY KEY,
                specialty VARCHAR(255) NOT NULL DEFAULT "JS",
                teacher_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (teacher_id) REFERENCES LabeTeachers(id)
            );
       	`).then(()=> populateUsersTable())
        
        console.log("Tables successfully created.")       	
    } catch (error) {
        console.log("Failed to create table.")
        console.log(error.sqlMessage)
    }
};

const populateUsersTable = async(): Promise<void> => {
    try {
        await connection("Labecoursees").insert(baseCourses[0]).insert(baseCourses[1]);
        
        await connection("LabeTeachers").insert(baseTeachers[0]).insert(baseTeachers[1]);
        await connection("LabeStudents").insert(baseStudents[0]).insert(baseStudents[1]);
        await connection("Hobbies").insert(baseHobbies[0]).insert(baseHobbies[1]);
        await connection("Specialties").insert(baseSpecialty[0]);
      

            console.log("Table successfully populated.")
    } catch (error) {
        console.log("Failed to populate table.")
        console.log(error.sqlMessage)
    };   
};

createTables().finally(()=> process.exit());