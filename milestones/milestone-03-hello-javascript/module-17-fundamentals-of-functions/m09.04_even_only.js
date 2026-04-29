function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        if(number % 2 === 0) {
            console.log(number);
            sum += number;
        }
    }
    return sum;
}

const numbs = [5, 8, 91, 24, 6];
const sum = sumOfEvenNumbers(numbs);
console.log("Sum of the even numbers is", sum);