"use strict";
var GovernmentID;
(function (GovernmentID) {
    const aadhaarLength = 12;
    function validateAadhaar(aadhaar) {
        const isNumeric = /^\d+$/.test(aadhaar);
        return isNumeric && aadhaar.length === aadhaarLength;
    }
    GovernmentID.validateAadhaar = validateAadhaar;
    function validatePAN(pan) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan);
    }
    GovernmentID.validatePAN = validatePAN;
})(GovernmentID || (GovernmentID = {}));
const aadhaarNumber = '456789012123';
const panNumber = 'ABCDE1234F';
console.log(GovernmentID.validateAadhaar(aadhaarNumber));
console.log(GovernmentID.validatePAN(panNumber));
