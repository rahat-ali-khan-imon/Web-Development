function textStats(text) {
    let cleanText = text.replace(/[^a-zA-Z\s]/g, "").trim();

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


/*
🧩 Code
let cleanText = text.replace(/[^a-zA-Z\s]/g, "").trim();


🎯 Overall কাজ কী?
👉 text থেকে unwanted character remove করে clean string বানানো


🔍 Part 1: .replace(/[^a-zA-Z\s]/g, "")
👉 এটা main magic 🧠
/[^a-zA-Z\s]/g

এটা একটা Regular Expression (Regex)


🔎 Breakdown
1️⃣ [a-zA-Z]

👉 সব English letters
a-z → small letter
A-Z → capital letter


2️⃣ \s
👉 whitespace (space, tab, newline)


3️⃣ [^ ... ] ← VERY IMPORTANT ⚠️
👉 ^ মানে NOT
[^a-zA-Z\s]

মানে:
👉 "যেগুলো letter না এবং space না"


4️⃣ g
👉 global → পুরো string এ apply হবে (একবার না, সব জায়গায়)


🔥 So full meaning:
/[^a-zA-Z\s]/g

👉 remove everything EXCEPT:
letters
spaces

🧪 Example
"Programming!!! 123"

After replace:
"Programming "


🔍 Part 2: .trim()
.trim()
👉 string এর শুরু + শেষের space remove করে

🧪 Example
"   Hello World   "

Result:
"Hello World"


🔥 Full Flow
let cleanText = text
    .replace(/[^a-zA-Z\s]/g, "")  // remove symbols + numbers
    .trim();                     // remove extra spaces start/end


🧪 Final Example
const text = "  Programming    is fun !!!111";

Step 1:
replace → "  Programming    is fun "

Step 2:
trim → "Programming    is fun"


🏆 Summary
| Part      | Meaning             |
| --------- | ------------------- |
| `[^...]`  | NOT                 |
| `a-zA-Z`  | letters             |
| `\s`      | space               |
| `g`       | global              |
| `.trim()` | remove outer spaces |



✅ Method 1: Loop + Manual Check (Most Important)
function cleanText(text) {
    let result = "";

    for (let char of text) {
        // letter or space হলে রাখবো
        if (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === " "
        ) {
            result += char;
        }
    }

    return result.trim();
}


⚠️ Difference vs Regex
| Method   | Pros               | Cons               |
| -------- | ------------------ | ------------------ |
| Regex    | Short & powerful   | Hard to understand |
| Loop     | Easy to understand | একটু বড় code       |
| filter   | Clean              | Slightly slower    |
| charCode | Fast & low-level   | Less readable      |


💎 Best Practice
👉 Production code:
.replace(/[^a-zA-Z\s]/g, "")

👉 Learning / Interview:
loop or filter method


🏆 Final Insight
👉 তুমি এখন ৩টা level শিখলে:
Beginner → loop
Intermediate → filter
Advanced → regex / charCode
*/