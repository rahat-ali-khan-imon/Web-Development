/** Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
    prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
    items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}
*/

function calcBill(prices, items) {
    console.log(prices);
    console.log(items);
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
const output = calcBill(prices, items);

console.log(output);
console.log(
    calcBill(
        { pen: 10, book: 50 }, 
        ["pen", "pen", "book", "pen"]
    )
);