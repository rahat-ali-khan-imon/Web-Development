// 🔵 Part 2: Loop an Object

const person = {
    name: "Karim",
    age: 25,
    city: "Dhaka"
};

// 1️⃣ for...in Loop (Most Common)
for (let key in person) {
    console.log(key, person[key]);
}