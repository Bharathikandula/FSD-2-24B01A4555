
// Program to Generate Prime Numbers in a Range
let start = 10;
let end = 50;
console.log(`Prime numbers between ${start} and ${end} are:`);
for (let num = start; num <= end; num++) {
    if (num <= 1) {
        continue;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
