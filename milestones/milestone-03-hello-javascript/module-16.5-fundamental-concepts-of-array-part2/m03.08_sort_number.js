// 2️⃣ Number Sort Problem (Very Important ⚠)
let numbers = [10, 5, 2, 8];

numbers.sort();

console.log(numbers);

/*
😱 কেন এমন হলো?
কারণ .sort() number গুলোকে string হিসেবে compare করে।
"10" < "2" (string comparison)
*/