const person = {
    name: "Alice Ali",
    age: 63,
    profession: "Developer",
    salary: 630000,
    married: true,
    favPlaces: ["Bandorban", "Saintmartin", "Kuakata"] 
}

const keyName = 'profession';
console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'Devops';
console.log(person);