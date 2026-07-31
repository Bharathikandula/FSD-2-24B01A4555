import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter two numbers: ", (input) => {
    const [a, b] = input.split(" ").map(Number);

    let x = a;
    let y = b;

    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }

    const gcd = x;
    const lcm = (a * b) / gcd;

    console.log("GCD:", gcd);
    console.log("LCM:", lcm);

    rl.close();
});