import { gst_rate, ticket_fee } from './constants.js';
export class Ticket {
    passenger;
    defaultfare;
    busno;
    constructor(passenger, defaultfare, busno) {
        this.passenger = passenger;
        this.defaultfare = defaultfare;
        this.busno = busno;
    }
    calcost() {
        const tax = this.defaultfare * gst_rate;
        return this.defaultfare + tax + ticket_fee;
    }
    print() {
        console.log("Ticket Details:");
        console.log('passenger:', this.passenger.name);
        console.log('busnumber: ', this.busno);
        console.log('total cost: ', this.calcost());
    }
}
