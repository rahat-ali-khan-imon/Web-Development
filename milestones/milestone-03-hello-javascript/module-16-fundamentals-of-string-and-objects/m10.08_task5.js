// Using for...in Loop

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {
    let value = myObject[key];
    console.log(`${key}: ${value} (${typeof value})`);
}