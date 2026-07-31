
// Program to Create a MathOperations Namespace
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
let num1 = 20;
let num2 = 5;
console.log("Addition:", MathOperations.add(num1, num2));
console.log("Subtraction:", MathOperations.subtract(num1, num2));
console.log("Multiplication:", MathOperations.multiply(num1, num2));
console.log("Division:", MathOperations.divide(num1, num2));
