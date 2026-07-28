// Program to Find the Missing Number in an Array

let numbers: number[] = [1, 2, 3, 5, 6, 7];

let n: number = numbers.length + 1;

let expectedSum: number = (n * (n + 1)) / 2;
let actualSum: number = 0;

for (let num of numbers) {
    actualSum += num;
}

let missingNumber: number = expectedSum - actualSum;

console.log("Array:", numbers);
console.log("Missing Number:", missingNumber);