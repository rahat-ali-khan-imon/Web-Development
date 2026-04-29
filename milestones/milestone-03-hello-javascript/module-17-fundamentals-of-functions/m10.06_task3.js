function make_avg(arr, size) {
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / size;
}

const numbers = [10, 20, 30, 40];
const result = make_avg(numbers, numbers.length);

console.log(result); // 25