function wordFrequency(sentence) {  
    let words = sentence.trim().split(" ");
    // let words = sentence.split(" ").trim();      // Error
    let wordCount = {};
    for(let word of words) {
        let wordLowerCase = word.toLowerCase();
        if(wordCount.hasOwnProperty(wordLowerCase)) {
            // wordCount[word] += 1;
            wordCount[wordLowerCase]++;
        } else {
            wordCount[wordLowerCase] = 1;
        }
    }
    return wordCount;
}

const output = wordFrequency("I love JS and I love coding and JS is fun Fun Fun Fun");
console.log(output);

console.log(wordFrequency(" Hello hello HELLO "));
console.log(wordFrequency(" Hello   hello HELLO "));