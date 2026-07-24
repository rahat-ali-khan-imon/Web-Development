function analyzeMarks(marksObj) {
    for(let key in marksObj) {
        console.log(key, ":", marksObj[key]);
    }
}

const output = { math: 78, english: 65, physics: 88, bangla: 55 };
console.log(analyzeMarks(output));

console.log(analyzeMarks({ ict: 90, biology: 90, chemistry: 70 }));