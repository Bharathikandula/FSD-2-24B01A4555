
// Program to Remove Duplicate Characters from a String
let str = "programming";
let result = "";
for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(`Original String: ${str}`);
console.log(`After Removing Duplicates: ${result}`);
