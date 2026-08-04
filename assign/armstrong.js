"use strict";
// Program to Check Armstrong Number
let num = 153;
let originalNum = num;
let sum = 0;
let digits = num.toString().length;
while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}
if (sum === originalNum) {
    console.log(`${originalNum} is an Armstrong Number`);
}
else {
    console.log(`${originalNum} is not an Armstrong Number`);
}
