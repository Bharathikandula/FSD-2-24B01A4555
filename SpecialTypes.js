"use strict";
// any datatype
let value = "Welcome";
value = 500;
value = 15 < 8;
console.log(value);
let result = 42;
result = "TypeScript";
result = "Have a nice day";
console.log(result);
// unknown datatype
let element = "Learning TS!";
if (typeof element == "string") {
    console.log(element);
}
let variable = "Programming";
if (typeof variable == "string") {
    console.log(variable);
}
// void type
function greet(message) {
    console.log("Hi " + message);
}
greet("Rahul");
function Printnumber(n) {
    console.log(n);
}
Printnumber(100);
