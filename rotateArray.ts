// Program to Rotate an Array by N Positions

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
let positions: number = 3;

positions = positions % numbers.length;

let rotatedArray: number[] = [
    ...numbers.slice(positions),
    ...numbers.slice(0, positions)
];

console.log("Original Array:", numbers);
console.log("Rotated Array:", rotatedArray);