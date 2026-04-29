// Important Example 5: Return Function (Advanced)

function outer() {
  return function inner() {
    return "Hello";
  };
}

const fn = outer();
console.log(fn()); // Hello

/*
👉 Function অন্য function return করতে পারে।
এটাই higher order concept এর শুরু।
*/