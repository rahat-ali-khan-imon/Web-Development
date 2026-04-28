const sentence = 'I am learning Web Dev';
console.log(sentence);

let rev = '';

for(let i = 0; i < sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

console.log(rev);