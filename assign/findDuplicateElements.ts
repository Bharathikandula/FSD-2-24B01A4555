
// Program to Find Duplicate Elements in an Array
let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7];
let duplicates = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) !== i &&
        !duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
    }
}
console.log("Original Array:", numbers);
console.log("Duplicate Elements:", duplicates);
