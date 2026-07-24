function countObjectProperty(obj) {
  console.log(obj);
  console.log(Object.keys(obj));      // Object to array
  let count = Object.keys(obj).length;
  return count;
}

let person = { name: "Utsho", age: 25, roll: 29, location: "Badda, Dhaka" };
let count = countObjectProperty(person);
console.log(count);