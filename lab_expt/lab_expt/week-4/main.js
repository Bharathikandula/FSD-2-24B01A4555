import { Ticket } from "./ticket.js";
const traveler = {
    name: "lahari",
    age: 20,
    seatpreference: 'middle'
};
const myticket = new Ticket(traveler, 1500, 156367);
myticket.print();
