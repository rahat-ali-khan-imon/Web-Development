function analyzeMarks(marksObj) {
    let total = 0;
    for(let key in marksObj) {
        let value = marksObj[key];
        total += value;
    }
    console.log("total:", total);
    let average = total / Object.keys(marksObj).length;
    console.log("Average:", average);

    return {
        total: total,
        average: average
    }
}

const output = { math: 78, english: 65, physics: 88, bangla: 55 };
console.log(analyzeMarks(output));

console.log(analyzeMarks({ ict: 90, biology: 90, chemistry: 70 }));