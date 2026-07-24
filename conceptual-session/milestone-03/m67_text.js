function textStats(text) {
    let characters = 0;
    let words = 0;
    let vowels = 0;
    let consonant = 0;

    let charArray = text.toLowerCase().trim().split('');

    for(const char of charArray) {
        if('aeiou'.includes(char)) {
            vowels++;
            characters++;
        } else if(char == ' ') {
            continue;
        } else {
            consonant++;
            characters++
        }
    }

    for(const word of text.split(' ')) {
        console.log(word);
    }
    
    return {
        characters,
        vowels,
        consonant
    }
}

const result = "JavaScript is fun to learn";
const ans = " I am OK ";

console.log(textStats(result));
console.log(textStats(ans));