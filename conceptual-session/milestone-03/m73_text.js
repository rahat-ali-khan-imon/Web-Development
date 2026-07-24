function textStats(text) {
    let cleanText = text
        .replace(/[^a-zA-Z\s]/g, "")
        .trim();

    let wordsArray = cleanText.split(/\s+/);
    let words = cleanText === "" ? 0 : wordsArray.length;

    let characters = 0;
    let vowels = 0;
    let consonants = 0;

    for (const char of cleanText.toLowerCase()) {
        if (char === " ") continue;

        characters++;

        if ("aeiou".includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }

    return {
        characters,
        words,
        vowels,
        consonants
    };
}

const result = "JavaScript is fun to learn";
const ans = " I     am OK ";
const output = "  Programming    is fun !!!111";  

console.log(textStats(result));
console.log(textStats(ans));
console.log(textStats(output));