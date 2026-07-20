// any datatype
let value: any = "Welcome";
value = 500;
value = 15 < 8;
console.log(value);

let result: any = 42;
result = "TypeScript";
result = "Have a nice day";
console.log(result);

// unknown datatype
let element: unknown = "Learning TS!";
if (typeof element == "string") {
    console.log(element);
}

let variable: unknown = "Programming";
if (typeof variable == "string") {
    console.log(variable);
}

// void type
function greet(message: string): void {
    console.log("Hi " + message);
}

greet("Rahul");

function Printnumber(n: number): void {
    console.log(n);
}

Printnumber(100);