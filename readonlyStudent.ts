
// Program to Create a Student Class with a readonly Student ID
class Student {
    studentId;
    name;
    course;
    constructor(studentId, name, course) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Details");
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}
let student = new Student(101, "Bharathi", "AI & DS");
student.displayDetails();
// Not Allowed
// student.studentId = 102; // Error: Cannot assign to 'studentId' because it is a read-only property.
