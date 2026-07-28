// Program to Find GCD and LCM of Two Numbers

let num1: number = 12;
let num2: number = 18;

let a: number = num1;
let b: number = num2;

while (b !== 0) {
    let temp: number = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;
let lcm: number = (num1 * num2) / gcd;

console.log(`GCD of ${num1} and ${num2} is: ${gcd}`);
console.log(`LCM of ${num1} and ${num2} is: ${lcm}`);tc