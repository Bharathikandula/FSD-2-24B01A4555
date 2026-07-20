"use strict";
// studentDetails.ts
var StudentPortal;
(function (StudentPortal) {
    // Private variable (not exported)
    const minimumAttendance = 75;
    // Exported function
    function checkAttendance(attendance) {
        return attendance >= minimumAttendance;
    }
    StudentPortal.checkAttendance = checkAttendance;
    // Exported function
    function validateRollNo(rollNo) {
        const rollRegex = /^[A-Z]{2}[0-9]{3}$/;
        return rollRegex.test(rollNo.toUpperCase());
    }
    StudentPortal.validateRollNo = validateRollNo;
    // Nested Namespace
    let Marks;
    (function (Marks) {
        function calculatePercentage(totalMarks, maxMarks) {
            return (totalMarks / maxMarks) * 100;
        }
        Marks.calculatePercentage = calculatePercentage;
    })(Marks = StudentPortal.Marks || (StudentPortal.Marks = {}));
})(StudentPortal || (StudentPortal = {}));
// -------- Using the Namespace --------
const attendance = 82;
const rollNo = "CS101";
console.log(`Attendance Eligible? ${StudentPortal.checkAttendance(attendance)}`);
console.log(`Roll Number Valid? ${StudentPortal.validateRollNo(rollNo)}`);
const total = 450;
const max = 500;
const percentage = StudentPortal.Marks.calculatePercentage(total, max);
console.log(`Percentage: ${percentage}%`);
// ERROR DEMO
// console.log(StudentPortal.minimumAttendance);
// Error: 'minimumAttendance' is not exported.
