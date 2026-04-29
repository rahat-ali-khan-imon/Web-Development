// Return vs console.log

function add(a, b) {
  console.log(a + b);
}

/*
এটা শুধু print করবে
কিন্তু value reuse করা যাবে না।
*/

// Better:
function add(a, b) {
  return a + b;
}

const total = add(2, 3);
console.log(total);


/*
✔ Reusable
✔ Testable
✔ Clean

💎 Best Practice Summary

✔ Always use return when value দরকার
✔ Use const to store return value (if no reassignment)
✔ Avoid mixing console.log as return
✔ Use early return for cleaner logic
✔ Be careful with newline after return
*/



/*
🧠 Interview Type Question

Q: Can a function return multiple values?
👉 Directly না।
But object বা array return করে multiple value simulate করা যায়।

Example:
*/

function calc(a, b) {
  return {
    sum: a + b,
    diff: a - b
  };
}

console.log(calc(10, 25));