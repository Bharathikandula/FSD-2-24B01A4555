
// Program to Check Strong Number
let num = 145;
let originalNum = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }
    sum += factorial;
    num = Math.floor(num / 10);
}
if (sum === originalNum) {
    console.log(`${originalNum} is a Strong Number`);
}
else {
    console.log(`${originalNum} is not a Strong Number`);
}
