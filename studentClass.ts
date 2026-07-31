
// Program to Create a Student Class with a Constructor and Display Student Details
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Details");
        console.log("Name   :", this.name);
        console.log("Age    :", this.age);
        console.log("Course :", this.course);
    }
}
let student1 = new Student("Bharathi", 20, "AI & DS");
student1.displayDetails();
