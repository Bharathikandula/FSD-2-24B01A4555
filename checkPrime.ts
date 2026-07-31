import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const n = Number(input);

    if (n <= 1) {
        console.log("Not Prime");
    } else {
        let isPrime = true;

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        console.log(isPrime ? "Prime" : "Not Prime");
    }

    rl.close();
});