"use strict";
class BankBranch {
    // STATIC: Shared by all objects
    static bankName = "State Bank of India";
    static totalAccountsCreated = 0;
    // READONLY: Assigned only once in constructor
    accountNumber;
    accountHolder;
    constructor(name, accNo) {
        this.accountHolder = name;
        this.accountNumber = accNo;
        // Increment total accounts
        BankBranch.totalAccountsCreated++;
    }
    // Static method
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. Minimum balance must be maintained.`);
    }
    // Instance method
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}
// -------- Execution --------
// Accessing static members
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
// Creating objects with different inputs
const user1 = new BankBranch("Rahul Sharma", "SBI100001");
const user2 = new BankBranch("Priya Reddy", "SBI100002");
const user3 = new BankBranch("Anil Kumar", "SBI100003");
// Display account details
user1.showAccount();
user2.showAccount();
user3.showAccount();
// Testing readonly
console.log(user1.accountNumber);
// user1.accountNumber = "SBI999999"; // Error: Cannot assign to readonly property.
// Testing static persistence
console.log(`Total Accounts Created: ${BankBranch.totalAccountsCreated}`);
