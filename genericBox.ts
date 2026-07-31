
// Program to Create a Generic Box<T> Class to Store and Display Different Types of Data
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Value:", this.value);
    }
}
// Box for number
let numberBox = new Box(100);
numberBox.display();
// Box for string
let stringBox = new Box("Hello TypeScript");
stringBox.display();
// Box for boolean
let booleanBox = new Box(true);
booleanBox.display();
