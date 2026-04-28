// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;

for(const key in student) {
    count++;
}

console.log(count);
console.log(Object.keys(student).length);