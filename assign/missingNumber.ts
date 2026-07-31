
// Program to Find the Missing Number in an Array
let numbers = [1, 2, 3, 5, 6, 7];
let n = numbers.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let num of numbers) {
    actualSum += num;
}
let missingNumber = expectedSum - actualSum;
console.log("Array:", numbers);
console.log("Missing Number:", missingNumber);
