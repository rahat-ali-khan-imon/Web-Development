function analyzeMarks(marksObj) {
    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;

    for(let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;

        if(mark > highestMark) {
            highestMark = mark;
        }
        if(mark < lowestMark) {
            lowestMark = mark;
        }
    }

    let average = total / Object.keys(marksObj).length;
    
    return {
        total: total,
        average: average,
        highestMark: highestMark,
        lowestMark: lowestMark
    }
}

const output = { math: 78, english: 65, physics: 88, bangla: 55 };
console.log(analyzeMarks(output));

console.log(analyzeMarks({ ict: 90, biology: 90, chemistry: 70 }));