// Parameter Order Important

function divide(a, b) {
  return a / b;
}

const x = divide(10, 2); // 5
const y = divide(2, 10); // 0.2

console.log(x);
console.log(y);

// 👉 Order matters
// Better approach যদি অনেক parameter থাকে:

function createUser({ name, age, email }) {
  return { name, age, email };
}

// ✔ Clear
// ✔ Order problem নাই
// ✔ Maintainable