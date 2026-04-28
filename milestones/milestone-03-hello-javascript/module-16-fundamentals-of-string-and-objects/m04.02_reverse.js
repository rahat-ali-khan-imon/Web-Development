const sentence = 'I am learning Web Dev';
console.log(sentence);

let reverse = '';
let temp = '';

for(const letter of sentence) {
    reverse = letter + reverse;
    temp = temp + letter;
}

console.log(reverse);
console.log(temp);