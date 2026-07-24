function textStats(text) {
    let characters = 0;
    let vowels = 0;
    let consonants = 0;

    let wordsArray = text.trim().split(/\s+/);                            // words count
    let words = text.trim() === "" ? 0 : wordsArray.length;

    for(const char of text.toLowerCase()) {
         console.log(char);
    }
    
    return {
        characters,
        words,
        vowels,
        consonants
    }
}

const result = "JavaScript is fun to learn";
const ans = " I     am OK ";
// const output = "  Programming    is fun !!!111";  

console.log(textStats(result));
console.log(textStats(ans));
// console.log(textStats(output));