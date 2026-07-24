function textStats(text) {
    let characters = 0;
    let words = 0;
    let vowels = 0;
    let consonant = 0;

    let charArray = text.split('');
    
    for(const char of charArray) {
        console.log(char);
    }
}

const result = "JavaScript is fun to learn";
const ans = " I am OK ";

console.log(textStats(result));
console.log(textStats(ans));