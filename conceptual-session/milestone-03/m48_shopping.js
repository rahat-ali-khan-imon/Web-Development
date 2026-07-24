function calcBill(prices, items) {
    let total = 0;

    for(let item in prices) { 
        let price = prices[item];
        total += price;
    }

    let itemCount = {};  
    
    for(let item of items) { 
        if(itemCount.hasOwnProperty(item)) { 
            itemCount[item]++;
        } else {
            itemCount[item] = 1;
        }
    }                                                                    //
    
    return { 
        total,
        itemCount  
    }
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
const output = calcBill(prices, items);

console.log(output);
console.log(calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]));