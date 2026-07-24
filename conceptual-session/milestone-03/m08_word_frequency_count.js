function wordFrequency(sentence) {
    let words = sentence.toLowerCase().trim().split(" ");
    console.log(words);
    for(let word of words) {
        console.log(word);
    }
    return sentence;
}

const output = wordFrequency("I love JS and I love coding and JS is fun");
console.log(output);

console.log(wordFrequency(" Hello hello HELLO "));