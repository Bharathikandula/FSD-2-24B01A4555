// variable annotation
let cartoon: string = "Doraemon";
let releaseYear: number = 1979;
let isHit: boolean = true;

function favCartoon(cartoon: string, year: number): string {
    return `${cartoon} is my favourite cartoon which was released in ${year}.`;
}

let fruits: string[] = ["banana", "grapes", "pineapple"];

const Result: string = favCartoon(cartoon, releaseYear);
console.log(Result);
console.log(`My favourite fruits are ${fruits.join(", ")}`);