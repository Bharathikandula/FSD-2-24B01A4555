"use strict";
// Program to Find the Second Largest Number in an Array
let numbers = [12, 45, 67, 23, 89, 54];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
console.log(`Largest Number: ${largest}`);
console.log(`Second Largest Number: ${secondLargest}`);
