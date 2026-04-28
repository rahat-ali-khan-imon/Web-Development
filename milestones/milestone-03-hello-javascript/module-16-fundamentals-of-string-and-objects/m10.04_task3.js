// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);     // Dot Notation
console.log(student["physics"]["marks"]);   // Bracket Notation


// ⚠ Corner Case (Error Avoid) --> যদি physics না থাকতো
console.log(student.physics?.marks);    // Optional chaining ?. error prevent করে।