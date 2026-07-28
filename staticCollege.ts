// Program to Create a Class with a static College Name and a static Method

class Student {
    static collegeName: string = "Shri Vishnu Engineering College for Women";

    name: string;
    branch: string;

    constructor(name: string, branch: string) {
        this.name = name;
        this.branch = branch;
    }

    displayDetails(): void {
        console.log("Student Name:", this.name);
        console.log("Branch:", this.branch);
        console.log("College:", Student.collegeName);
    }

    static displayCollegeName(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Bharathi", "AI & DS");

student1.displayDetails();

Student.displayCollegeName();