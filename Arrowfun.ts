// traditional function
function calDiscount(price: number, discount: number = 15): number {
    return price - (price * discount / 100);
}

// arrow function
const calDiscountArrow = (price: number, discount: number = 15): number => {
    return price - (price * discount / 100);
};

// shorthand arrow function
const greet = (name: string = "User"): string => `Hello ${name}!`;

console.log(greet());
console.log(greet("Arjun"));

const res1 = calDiscountArrow(2500, 25);
console.log(res1);

const res2 = calDiscount(1800, 20);
console.log(res2);