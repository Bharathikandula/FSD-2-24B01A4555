"use strict";
// variable annotation
let cartoon = "Doraemon";
let releaseYear = 1979;
let isHit = true;
function favCartoon(cartoon, year) {
    return `${cartoon} is my favourite cartoon which was released in ${year}.`;
}
let fruits = ["banana", "grapes", "pineapple"];
const Result = favCartoon(cartoon, releaseYear);
console.log(Result);
console.log(`My favourite fruits are ${fruits.join(", ")}`);
