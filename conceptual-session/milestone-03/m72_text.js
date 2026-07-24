function textStats(text) {
    let characters = 0;
    let vowels = 0;
    let consonants = 0;

    let wordsArray = text.trim().split(/\s+/);               // 👉 multiple spaces handle করছে ✔
    let words = text.trim() === "" ? 0 : wordsArray.length; // 👉 empty string case handle করছো ✔

    for(const char of text.toLowerCase()) {
        if(char === " ") {
            continue;
        }
        if(char >= "a" && char <= "z") {  // 👉 শুধু alphabet count করছো ✔ and 👉 numbers / symbols ignore ✔
            characters++;
            if("aeiou".includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
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
const output = "  Programming    is fun !!!111";  

console.log(textStats(result));
console.log(textStats(ans));
console.log(textStats(output));


/*
⚠️ Small Improvement (Pro Level)
👉 Case: Special characters present
const output = "  Programming    is fun !!!111";

👉 তোমার code এ:
✔ characters → correct (only letters count)
✔ BUT words count → ["Programming", "is", "fun", "!!!111"] ❌
*/