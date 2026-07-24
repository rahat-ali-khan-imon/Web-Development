function textStats(text) {
    let characters = 0;
    let vowels = 0;
    let consonants = 0;

    let words = text.trim().split(' ').length;
    let charArray = text.toLowerCase().trim().split('');

    for(const char of charArray) {
        if('aeiou'.includes(char)) {
            vowels++;
            characters++;
        } else if(char == ' ') {
            continue;
        } else {
            consonants++;
            characters++
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
const ans = " I am OK ";
const output = "  Programming    is fun !!!111";                                // error

console.log(textStats(result));
console.log(textStats(ans));
console.log(textStats(output));