"use strict";
//any datatype
let value = "Good Day";
value = 10;
value = 10 > 5;
console.log(value);
let result = 98;
result = "welcome";
result = "hello everyone";
console.log(result);
//unknown datatype
let element = "great day!";
if (typeof element == "string") {
    console.log(element);
}
let variable = 25;
if (typeof variable == "string") {
    console.log(variable);
}
//void type
function greet(message) {
    console.log("hello " + message);
}
greet("rani");
function Printnumber(n) {
    console.log(n);
}
Printnumber(25);
