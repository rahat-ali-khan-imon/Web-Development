// Two arrays
let fruits = ['apple', 'banana', 'mango'];
let vegetables = ['carrot', 'potato', 'tomato'];

// Combine arrays using spread operator
let combinedArray = [...fruits, ...vegetables];

// Print arrays
console.log("Fruits Array:", fruits);
console.log("Vegetables Array:", vegetables);
console.log("Combined Array:", combinedArray);

/**
 * 🧠 কী হচ্ছে এখানে?

-> ...fruits → fruits array এর সব elements unpack করে
-> ...vegetables → vegetables array এর সব elements unpack করে
-> নতুন array [...fruits, ...vegetables] তৈরি হয়


🔥 Important Note
concat() এবং ... দুইটাই new array create করে
Original arrays modify হয় না
Spread operator বেশি modern এবং flexible
*/