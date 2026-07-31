"use strict";
// variable annotation
let cartoon = "shin chan";
let releaseYear = 2006;
let isHit = true;
function favCartoon(cartoon, year) {
    return `${cartoon} is my favourite cartoon which is released in ${year}.`;
}
let fruits = ["mango", "apple", "orange"];
const result = favCartoon(cartoon, releaseYear);
console.log(result);
console.log(`my fav fruits are ${fruits.join(",")}`);
