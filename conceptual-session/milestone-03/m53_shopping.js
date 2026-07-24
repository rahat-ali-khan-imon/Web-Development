function calcBill(prices, items) {
    let itemCount = {};

    for(const item of items) {
        if(itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        } else {
            itemCount[item] = 1;
        }
    }

    let total = 0;
    for(const price in prices) {
        let value = prices[price] * itemCount[price];
        total += value;
    }
    
    return {
        total,
        itemCount
    }
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

const result = calcBill(prices, items);
console.log(result);


const prices2 = { pen: 10, book: 50 };
const items2 = ["pen", "pen", "book", "pen"];
console.log(calcBill(prices2, items2)); 