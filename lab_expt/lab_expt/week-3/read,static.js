"use strict";
class Airways {
    static custname = "vijaya";
    static seatno;
    constructor(seat) {
        Airways.seatno = seat;
    }
    static display() {
        console.log(`Welcome to the Airways Ms. ${Airways.custname}`);
    }
}
const a = new Airways(1);
Airways.display();
