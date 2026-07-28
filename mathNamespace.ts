// Program to Create a MathOperations Namespace

namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

let num1: number = 20;
let num2: number = 5;

console.log("Addition:", MathOperations.add(num1, num2));
console.log("Subtraction:", MathOperations.subtract(num1, num2));
console.log("Multiplication:", MathOperations.multiply(num1, num2));
console.log("Division:", MathOperations.divide(num1, num2));