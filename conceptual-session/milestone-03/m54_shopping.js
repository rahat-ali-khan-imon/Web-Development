// ✅ JavaScript Solution

function calcBill(prices, items) {

    let total = 0;
    let itemCount = {};

    for (const item of items) {

        // total price add
        total += prices[item];

        // item count
        if (itemCount[item]) {
            itemCount[item]++;
        } else {
            itemCount[item] = 1;
        }
    }

    return {
        total: total,
        itemCount: itemCount
    };
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

console.log(calcBill(prices, items));


const prices2 = { pen: 10, book: 50 };
const items2 = ["pen", "pen", "book", "pen"];

console.log(calcBill(prices2, items2));


/** 
🧠 Important Concepts (JavaScript)
| Concept             | Explanation                |
| ------------------- | -------------------------- |
| `object[key]`       | object থেকে value নেওয়া    |
| `for...of`          | array iterate করা          |
| `itemCount[item]++` | count increase করা         |
| object return       | multiple result return করা |


⚡ Logic (Very Simple)
items loop
   ↓
price add → total
   ↓
count increase → itemCount
   ↓
শেষে return { total, itemCount }
*/