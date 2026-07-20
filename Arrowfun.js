"use strict";
// traditional function
function calDiscount(price, discount = 15) {
    return price - (price * discount / 100);
}
// arrow function
const calDiscountArrow = (price, discount = 15) => {
    return price - (price * discount / 100);
};
// shorthand arrow function
const greet = (name = "User") => `Hello ${name}!`;
console.log(greet());
console.log(greet("Arjun"));
const res1 = calDiscountArrow(2500, 25);
console.log(res1);
const res2 = calDiscount(1800, 20);
console.log(res2);
