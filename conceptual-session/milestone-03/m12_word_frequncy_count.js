function wordFrequency(sentence) {  
    let words = sentence.split(" ");
    let wordCount = {};
    for(let word of words) {
        if(wordCount.hasOwnProperty(word)) {
            // wordCount[word] += 1;
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}

const output = wordFrequency("I love JS and I love coding and JS is fun Fun");
console.log(output);

console.log(wordFrequency(" Hello hello HELLO "));