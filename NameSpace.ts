// studentDetails.ts

namespace StudentPortal {

    // Private variable (not exported)
    const minimumAttendance = 75;

    // Exported function
    export function checkAttendance(attendance: number): boolean {
        return attendance >= minimumAttendance;
    }

    // Exported function
    export function validateRollNo(rollNo: string): boolean {
        const rollRegex = /^[A-Z]{2}[0-9]{3}$/;
        return rollRegex.test(rollNo.toUpperCase());
    }

    // Nested Namespace
    export namespace Marks {

        export function calculatePercentage(totalMarks: number, maxMarks: number): number {
            return (totalMarks / maxMarks) * 100;
        }

    }
}

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