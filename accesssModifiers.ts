
// Program to Demonstrate Public, Private, and Protected Access Modifiers
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayEmployee() {
        console.log("Employee Details");
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary, department);
    }
    displayDepartment() {
        console.log("Department:", this.department);
    }
}
let employee = new Employee("Bharathi", 50000, "AI & DS");
employee.displayEmployee();
let manager = new Manager("Keerthi", 70000, "Development");
manager.displayDepartment();
// Accessible
console.log(employee.name);
// Not Accessible
// console.log(employee.salary);      // Error: salary is private
// console.log(employee.department);  // Error: department is protected
