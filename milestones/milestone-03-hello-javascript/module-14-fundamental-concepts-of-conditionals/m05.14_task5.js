// Two arrays
let fruits = ['apple', 'banana', 'mango'];
let vegetables = ['carrot', 'potato', 'tomato'];

// Add all elements of vegetables into fruits using push + spread
fruits.push(...vegetables);

// Print the arrays
console.log("Fruits Array after combining:", fruits);
console.log("Vegetables Array:", vegetables);


/**
 * 🧠 কী হচ্ছে এখানে?

-> ...vegetables → vegetables array এর সব elements unpack করে
-> fruits.push(...vegetables) → fruits array এর শেষে সব elements add করে
-> Original fruits array modify হয়
-> vegetables array অপরিবর্তিত থাকে


🔥 Summary of 3 Solutions
| Method           | Original Array Changed? | Notes                   |
| ---------------- | ----------------------- | ----------------------- |
| `concat()`       | No                      | Creates a new array     |
| `[...spread]`    | No                      | Modern & flexible       |
| `push(...array)` | Yes                     | Modifies original array |
*/