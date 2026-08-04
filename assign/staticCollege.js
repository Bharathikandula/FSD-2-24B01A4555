"use strict";
// Program to Create a Class with a static College Name and a static Method
class Student {
    static collegeName = "Shri Vishnu Engineering College for Women";
    name;
    branch;
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
    displayDetails() {
        console.log("Student Name:", this.name);
        console.log("Branch:", this.branch);
        console.log("College:", Student.collegeName);
    }
    static displayCollegeName() {
        console.log("College Name:", Student.collegeName);
    }
}
let student1 = new Student("Bharathi", "AI & DS");
student1.displayDetails();
Student.displayCollegeName();
