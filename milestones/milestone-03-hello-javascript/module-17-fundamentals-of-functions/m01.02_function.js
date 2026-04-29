// Function Declaration (Most Common)

function greet(name) {
  return "Hello " + name;
}

let result = greet("JavaScript");
console.log(result);

/*
Explanation:
1. function → keyword
2. greet → function name
3. (name) → parameter
4. {} → function body
5. return → value return করে
*/


/* let result = greet("JavaScript"); --> let or const use korbo

✅ Short Answer:
👉 এখানে const use করা better।

🔎 Why?
const result = greet("JavaScript");

কারণ:
result একবার assign হচ্ছে
পরে আর change হচ্ছে না
তাই এটা reassign করার দরকার নেই

👉 const মানে variable reference change হবে না।
*/


/* 🔥 Difference Between let vs const

| Feature           | let                | const                     |
| ----------------- | ------------------ | ------------------------- |
| Reassign করা যায়? | ✅ Yes              | ❌ No                      |
| Block scope?      | ✅ Yes              | ✅ Yes                     |
| Best practice?    | When value changes | When value doesn’t change |
*/


/*
⚠️ Corner Case 1: Reassign করলে?
const result = greet("JS");
result = greet("Python"); // ❌ Error

👉 Error দিবে: Assignment to constant variable


কিন্তু 👇
let result = greet("JS");
result = greet("Python"); // ✅ Works


⚠️ Corner Case 2: Object হলে?
const user = { name: "Rahim" };
user.name = "Karim";  // ✅ Works

👉 এখানে object change করা যাচ্ছে
কারণ const শুধু reference lock করে, object freeze করে না।



💎 Best Practice (Modern JS Rule)
👉 Always start with const
👉 যদি later বুঝো reassign দরকার → তখন let use করো

Senior developers usually follow this rule.
*/