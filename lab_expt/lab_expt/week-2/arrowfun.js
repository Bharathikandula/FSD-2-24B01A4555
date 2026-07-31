"use strict";
//traditional function
function calDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
//arrow function
const calDiscountArrow = (price, discount = 10) => {
    return price - (price * discount / 100);
};
//shorthand arrow function 
const greet = (name = "guest") => `welcome ${name}!`;
console.log(greet());
console.log(greet("rani"));
const res1 = calDiscountArrow(1000, 20);
console.log(res1);
const res2 = calDiscount(1000, 30);
console.log(res2);
