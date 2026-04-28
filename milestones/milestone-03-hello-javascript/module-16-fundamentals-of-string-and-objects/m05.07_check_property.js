let person = {
    name: "Rahim",
    age: 25,
    city: "Dhaka"
};

// Check Property Exists
console.log("name" in person);  // true

// or
console.log(person.hasOwnProperty("age"));