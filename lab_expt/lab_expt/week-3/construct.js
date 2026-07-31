"use strict";
class Student {
    // Properties
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age || 18;
    }
    // Method
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
// Objects
let s1 = new Student("Jaya");
let s2 = new Student("Lahari", 20);
console.log("Student 1");
s1.display();
console.log("\nStudent 2");
s2.display();
