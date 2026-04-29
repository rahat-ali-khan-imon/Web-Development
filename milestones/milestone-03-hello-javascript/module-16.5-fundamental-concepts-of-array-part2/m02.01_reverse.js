const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

numbers.reverse();  // reverse() method শুধু array এর জন্য কাজ করে।
// reverse() original array কে change করে (mutates array) ⚠
console.log(numbers);


// reverse() string এ কাজ করে না
const str = 'JavaScript';

let reversed = str.split('').reverse().join('');
console.log(reversed);

/**
 * Reverse String --->> split + reverse + join

🧠 কী হচ্ছে এখানে?
1. split('')
👉 string → array
["J","a","v","a","S","c","r","i","p","t"]

2. reverse()
👉 array reverse

3. join('')
👉 আবার string বানানো
*/