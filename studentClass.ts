// Program to Create a Student Class with a Constructor and Display Student Details

class Student {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student Details");
        console.log("Name   :", this.name);
        console.log("Age    :", this.age);
        console.log("Course :", this.course);
    }
}

let student1 = new Student("Bharathi", 20, "AI & DS");

student1.displayDetails();