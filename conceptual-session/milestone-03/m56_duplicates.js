function removeDuplicates(arr) {
    let uniqueArray = [];

    for(const item of arr) {
        if(!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    
    return uniqueArray;
}

const array1 = [5, 3, 5, 2, 3, 9, 2, 7];
const array2 = [1, 1, 1, 1];

console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));