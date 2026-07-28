// Program to Count the Occurrences of Each Element in an Array

let numbers: number[] = [1, 2, 3, 2, 4, 1, 5, 3, 2];

let frequency: { [key: number]: number } = {};

for (let num of numbers) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log("Element Frequencies:");

for (let key in frequency) {
    console.log(`${key} : ${frequency[key]}`);
}