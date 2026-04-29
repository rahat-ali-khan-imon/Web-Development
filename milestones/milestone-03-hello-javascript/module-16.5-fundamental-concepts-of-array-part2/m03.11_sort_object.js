// 5️⃣ Sort Objects by Property

let students = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 20 },
    { name: "Salam", age: 23 }
];

students.sort((a, b) => a.age - b.age);

console.log(students);