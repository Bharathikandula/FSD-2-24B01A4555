
// Program to Count the Frequency of Characters in a String
let str = "programming";
let frequency = {};
for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    }
    else {
        frequency[char] = 1;
    }
}
console.log("Character Frequencies:");
for (let char in frequency) {
    console.log(`${char} : ${frequency[char]}`);
}
