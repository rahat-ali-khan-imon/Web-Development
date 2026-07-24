function calcBill(prices, items) {
    console.log("Prices:");
    for(let item in prices) {                                   //
        console.log(item);
    }
    console.log("\nItems:");
    for(let item of items) {
        console.log(item);
    }
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
const output = calcBill(prices, items);

console.log(output);
console.log(calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]));