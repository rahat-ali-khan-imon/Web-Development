function wordFrequency(sentence) {
    let words = sentence.split(" ");
    console.log(words);
    return sentence;
}

const output = wordFrequency("I love JS and I love coding and JS is fun");
console.log(output);

console.log(wordFrequency(" Hello hello HELLO "));