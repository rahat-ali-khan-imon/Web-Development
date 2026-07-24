function wordFrequency(sentence) {  
    // let words = sentence.split(" ");
    // console.log(words);

    let wordCount = {
        name: "Alice",
        age: 63
    };
    console.log(wordCount.hasOwnProperty("name"));
    console.log(wordCount.hasOwnProperty("age"));

    // for(let word of words) {
    //     console.log(word);
    // }
    // return sentence;
}

const output = wordFrequency("I love JS and I love coding and JS is fun");
console.log(output);

console.log(wordFrequency(" Hello hello HELLO "));