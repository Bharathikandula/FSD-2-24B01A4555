"use strict";
class Student {
    // Properties
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age || 19;
    }
    // Method
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
// Objects
let s1 = new Student("Rahul");
let s2 = new Student("Priya", 21);
console.log("Student 1");
s1.display();
console.log("\nStudent 2");
s2.display();
