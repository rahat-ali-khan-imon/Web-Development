function wordFrequency(sentence) {

    let words = sentence.toLowerCase().trim().split(/\s+/);
    let wordCount = {};

    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    
    return wordCount;
}

console.log(wordFrequency("I love JS and I love coding and JS is fun"));
console.log(wordFrequency(" Hello hello HELLO "));
console.log(wordFrequency(" Hello   hello HELLO "));


/** 
যদি sentence এ multiple spaces থাকে 👇
    " Hello   hello HELLO "

তাহলে split(" ") এর result হবে:
    ["", "Hello", "", "", "hello", "HELLO", ""]

মানে empty string "" তৈরি হবে ❌
তখন output এ এমন আসতে পারে:
    { "": 3, hello: 3 }
যা ভুল।



✅ Better Solution
আমরা trim + regex split ব্যবহার করবো।

🧠 Important Concepts
1️⃣ toLowerCase()
Case ignore করতে
    "HELLO" → "hello"

2️⃣ trim()
Start + end space remove করে
    \s → whitespace
    +  → one or more
মানে
    "Hello   world"
ঠিকভাবে split হবে।
*/