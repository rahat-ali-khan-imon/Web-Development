const ages = [];
const numbers = [12, 23, 44, 55];

console.log(numbers);
numbers.push(17);
numbers.push(23);
// numbers.push([63, 97, 1]);
numbers.push(63, 97, 1);
console.log(numbers)


/**
 * push(63, 97, 1)

👉 এখানে গুরুত্বপূর্ণ বিষয় হলো:
push() একসাথে multiple value নিতে পারে।

Final array হবে:
    [12, 23, 44, 55, 17, 23, 63, 97, 1]



numbers.push([63, 97, 1])

⚠ এখানে important বিষয় আছে
তুমি একটা array কে array এর ভিতরে push করেছো

Final result হবে:
    [12, 23, 44, 55, 17, 23, [63, 97, 1]]

এটা এখন একটা nested array হয়ে গেছে।
*/