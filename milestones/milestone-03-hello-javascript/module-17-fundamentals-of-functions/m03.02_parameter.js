/*
🔹 What is Function Parameter?
👉 Parameter হলো function এর ভিতরে যে variable গুলো থাকে
👉 Argument হলো function call করার সময় যে value পাঠাই
*/

function greet(name) {   // name = parameter
  return "Hello " + name;
}

const x = greet("Rahim"); // "Rahim" = argument
console.log(x);