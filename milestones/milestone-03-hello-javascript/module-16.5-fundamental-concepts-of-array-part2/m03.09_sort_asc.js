// 3️⃣ Correct Number Sorting (Ascending) 
let numbers = [10, 5, 2, 8];

numbers.sort((a, b) => a - b);

console.log(numbers);

/*
🧠 Explanation
যদি result negative হয় → a আগে আসবে
positive হলে → b আগে আসবে
a - b → ছোট থেকে বড়
*/