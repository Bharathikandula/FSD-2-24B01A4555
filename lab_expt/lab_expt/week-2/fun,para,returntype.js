"use strict";
// parameter and return type function
function Intro(name, branch) {
    return `Hello Everyone, my name is ${name} from ${branch}.`;
}
//default parameter
function details(place = "Bangalore") {
    return `i am from ${place}.`;
}
//optional parameter
function contactno(mobile, email) {
    console.log(`my number is ${mobile}`);
    if (email) {
        console.log(`email is ${email}`);
    }
}
//REST parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(Intro("neha", "AIDS"));
console.log(details("rjy"));
console.log(contactno(9789654789));
console.log(sum(5, 10, 15, 20));
