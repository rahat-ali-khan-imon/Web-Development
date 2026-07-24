function analyzeMarks(marksObj) {
    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;
    let highestSubject = null;
    let lowestSubject =  null;

    for(let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;

        if(mark > highestMark) {
            highestMark = mark;
            highestSubject = subject;
        }
        if(mark < lowestMark) {
            lowestMark = mark;
            lowestSubject = subject;
        }
    }

    let average = total / Object.keys(marksObj).length;

    console.log("Highest subject:", highestSubject);
    console.log("Lowest subject:", lowestSubject);
    
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