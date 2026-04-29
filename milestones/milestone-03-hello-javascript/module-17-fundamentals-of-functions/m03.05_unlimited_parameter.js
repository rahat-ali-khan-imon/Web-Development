// Handle Unlimited Parameters (Rest Parameter) --> যদি কতগুলো argument আসবে জানি না 

function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const x = add(1, 2, 3, 4); // 10
console.log(x);


/*
Explanation:
...numbers = rest parameter
এটা array বানিয়ে ফেলে
আমরা reduce দিয়ে যোগ করছি

👉 Modern JS এ unlimited parameter handle করার best way হলো rest operator।
*/

/*
⚠️ Corner Case: arguments object
Old way:
function add() {
  console.log(arguments);
}

arguments হলো array-like object
❌ But arrow function এ এটা নাই
const add = () => {
  console.log(arguments); // Error
};

👉 So modern way: always use ...rest
*/