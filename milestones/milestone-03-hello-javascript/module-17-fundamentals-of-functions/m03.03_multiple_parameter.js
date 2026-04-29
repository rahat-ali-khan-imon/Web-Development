// Multiple Parameters (Basic)

function add(a, b, c) {
  return a + b + c;
}

const x = add(1, 2, 3); // 6
console.log(x);

// ⚠️ Corner Case 1: কম argument দিলে
const y = add(1, 2); 
console.log(y);

/*
👉 c হবে undefined
👉 Result হবে NaN

Because: 1 + 2 + undefined → NaN
*/


// 🔹 Solution: Default Parameter
function addDefault(a = 0, b = 0, c = 0) {
  return a + b + c;
}

let z = addDefault(1, 4);
console.log(z);
/*
✔ এখন safe
✔ missing argument সমস্যা হবে না

👉 Modern JS এ এটা best practice।
*/