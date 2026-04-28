const student = {
    name: "Karim",
    age: 22,
    department: "CSE",
    marks: {
        math: 90,
        english: 85
    }
};

console.log(student.marks.math);

/*
3️⃣ Nested Objects (Object এর ভিতরে Object) 🔥
আমাদের example এ marks হলো nested object।
🔹 Nested value access করা
*/

// or
console.log(student["marks"]["english"]);

console.log(student.address?.city);     // undefined
console.log(student.marks?.math);      // 90
console.log(student.marks?.biology);  // undefined

/*
⚠ Safe Access (Related Important)
যদি nested object না থাকে?

👉 Optional chaining ?. error prevent করে।
*/