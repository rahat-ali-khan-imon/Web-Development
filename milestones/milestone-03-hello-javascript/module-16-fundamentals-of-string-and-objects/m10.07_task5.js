// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const key in myObject) {
    // console.log(key, ':', myObject[key], ' --> ', typeof myObject[key]);
    console.log(key + ': ' + myObject[key] + ' | ' + 'type: ' + typeof myObject[key]);
}