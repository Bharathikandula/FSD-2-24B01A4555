// Program to Find the Second Largest Number in an Array

let numbers: number[] = [12, 45, 67, 23, 89, 54];

let largest: number = -Infinity;
let secondLargest: number = -Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(`Largest Number: ${largest}`);
console.log(`Second Largest Number: ${secondLargest}`);