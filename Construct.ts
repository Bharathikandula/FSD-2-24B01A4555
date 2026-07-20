class Student {

    // Properties
    name: string;
    age: number;

    // Constructor Overloading
    constructor(name: string);
    constructor(name: string, age: number);

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age || 19;
    }

    // Method
    display(): void {
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