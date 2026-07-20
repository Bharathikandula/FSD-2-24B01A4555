// parameter and return type function
function Intro(name: string, branch: string): string {
    return `Hello Everyone, my name is ${name} from ${branch}.`;
}

// default parameter
function details(place: string = "Hyderabad"): string {
    return `I am from ${place}.`;
}

// optional parameter
function contactno(mobile: number, email?: string): void {
    console.log(`My number is ${mobile}`);
    if (email) {
        console.log(`Email is ${email}`);
    }
}

// REST parameters
function sum(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(Intro("Rahul", "CSE"));
console.log(details("Vijayawada"));
contactno(9876543210, "rahul@gmail.com");
console.log(sum(12, 18, 25, 30));