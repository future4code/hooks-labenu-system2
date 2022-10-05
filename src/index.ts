import { app } from "./app";
import { createCourse } from "./endpoints/createCourse";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getActiveCourses } from "./endpoints/getActiveCourses";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { getStudentByName } from "./endpoints/getStudentByName";
import { switchCourseModule } from "./endpoints/switchCourseModule";
import { switchStudentCourse } from "./endpoints/switchStudentCourse";

app.post("/courses", createCourse);
app.post("/teachers", createTeacher);
app.post("/students", createStudent);
app.get("/courses/active", getActiveCourses);
app.get("/teachers", getAllTeachers);
app.get("/students/", getStudentByName);
app.put("/courses/course/details", switchCourseModule);
app.put("/students/student/details", switchStudentCourse);

// app.put("/",)