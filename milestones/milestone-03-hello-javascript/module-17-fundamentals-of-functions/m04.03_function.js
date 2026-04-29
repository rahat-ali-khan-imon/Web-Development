// Function কীভাবে কাজ করে? (Behind the Scene)

function add(a, b) {
  return a + b;
}

const result = add(5, 3);   // 8
console.log(result);

/*
Step-by-step কী হচ্ছে:

1️⃣ JS memory তে add নামে function store করে
2️⃣ যখন add(5, 3) call হয়
3️⃣ JS নতুন execution context create করে
4️⃣ a = 5, b = 3 assign হয়
5️⃣ function body execute হয়
6️⃣ return value caller এ পাঠায়
7️⃣ execution context destroy হয়

👉 Function call হলে temporary memory তৈরি হয়, কাজ শেষ হলে clean হয়ে যায়।
*/