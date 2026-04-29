/* What is return?
👉 return মানে function তার কাজ শেষ করে একটা value caller এর কাছে পাঠায়।
*/

function add(a, b) {
  return a + b;
}
// এখানে a + b value return হচ্ছে।



// Return value variable এ store করা
const result = add(5, 3);
console.log(result); // 8

/*
কী হচ্ছে এখানে?

1️⃣ add(5,3) execute হয়
2️⃣ 8 return করে
3️⃣ result variable এ 8 store হয়

👉 Since result reassign করবো না → const best practice।
*/