// 💎 More Safe Version

function processNumber(num) {
  num = Number(num);

  if (!Number.isInteger(num)) {
    return "Invalid Input";
  }

  return num % 2 === 0 ? num / 2 : num * 2;
}

const result = processNumber(0);
const ans = processNumber(13);

console.log(result);
console.log(ans);
console.log(processNumber(10));


/*
🔹 Number.isInteger(num) কী কাজ করে?
👉 এটা check করে value টা integer (পূর্ণ সংখ্যা) কিনা।
👉 Return করে true বা false.
*/

// ✅ Basic ExampleNumber.isInteger(10);      // true
Number.isInteger(-5);      // true
Number.isInteger(3.5);     // false
Number.isInteger("10");    // false
Number.isInteger(NaN);     // false

/*
🔎 Explanation:

10 → পূর্ণ সংখ্যা → ✅ true
3.5 → decimal → ❌ false
"10" → string → ❌ false (type check করে)
NaN → ❌ false

👉 এটা শুধু number type এর integer হলে true দিবে।
👉 Type coercion করে না।
*/




// 🔥 Important Difference
// ❌ isNaN() vs Number.isInteger()
isNaN("10");            // false  (string convert করে check করে)
Number.isInteger("10"); // false  (convert করে না)
// 👉 Number.isInteger() more strict।



/*
⚠️ Corner Cases
1️⃣ Very Large Number
Number.isInteger(9999999999999999); 

JS safe integer limit আছে।


Better check করতে হলে:
Number.isSafeInteger(num);


2️⃣ Infinity
Number.isInteger(Infinity); // false

✔ Correct behavior।



💎 Best Practice
✔ Integer logic করলে Number.isInteger() use করো
✔ Big number হলে Number.isSafeInteger() consider করো
✔ Avoid parseInt() for validation



🧠 Mini Interview Question
Q: Why Number.isInteger("10") false?
A: Because এটা type coercion করে না। Strict check করে।
*/