// 7️⃣ Reverse Sort Shortcut

let numbers = [1, 2, 3, 4];

numbers.sort((a, b) => a - b).reverse();

console.log(numbers);


/*
⚠ Important Behavior
1. .sort() original array change করে ⚠
2. Compare function না দিলে string compare হয়
3. Number sort করতে হলে compare function লাগবে

🎯 Compare Function Rule (মনে রাখবে)
| Return Value | Meaning          |
| ------------ | ---------------- |
| Negative     | a আগে            |
| Positive     | b আগে            |
| 0            | কিছু পরিবর্তন না |


🔥 Most Important Interview Pattern
array.sort((a, b) => a - b); // Ascending
array.sort((a, b) => b - a); // Descending


🎯 Key Points
1. Default sort → string based
2. Number sort → compare function must
3. Object sort → property compare
4. sort() original array modify করে
*/