const person = {
    name: "Alice Ali",
    age: 63,
    profession: "Developer",
    salary: 630000,
    married: true,
    favPlaces: ["Bandorban", "Saintmartin", "Kuakata"] 
}

console.log(person);

person.salary = 100000000;
console.log(person);

person['age'] = 23;
console.log(person);

person['favPlaces'] = ['Maldives', 'Bali', 'Pataya'];
console.log(person);