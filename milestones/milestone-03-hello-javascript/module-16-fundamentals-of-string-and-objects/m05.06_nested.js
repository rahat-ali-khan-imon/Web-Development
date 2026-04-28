// Nested Object (Important 🔥)

let student = {
    name: "Karim",
    marks: {            // Object এর ভিতরে object থাকতে পারে।
        math: 90,
        english: 85
    }
};

console.log(student.marks.math);