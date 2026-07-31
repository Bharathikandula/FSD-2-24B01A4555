
// Program to Convert Decimal to Binary
let decimal = 25;
let binary = "";
let num = decimal;
if (num === 0) {
    binary = "0";
}
else {
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
}
console.log(`Binary of ${decimal} is ${binary}`);
