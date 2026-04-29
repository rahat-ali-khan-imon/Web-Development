// 6️⃣ Sort Strings Case-Insensitive

let names = ["apple", "Banana", "mango", 'Apple'];

names.sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
);

console.log(names);