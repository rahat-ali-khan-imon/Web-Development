// Destructuring Parameter (Advanced & Clean)

function userInfo({ name, age }) {
  return `${name} is ${age} years old`;
}

const x = userInfo({ name: "Rahim", age: 25 });
console.log(x);

/*
⚠️ Corner Case:
      userInfo(); 

❌ Error দিবে (cannot destructure undefined)
*/

// ✔ Better:
function userInfo({ name, age } = {}) {
  return `${name ?? "Unknown"} is ${age ?? 0} years old`;
}