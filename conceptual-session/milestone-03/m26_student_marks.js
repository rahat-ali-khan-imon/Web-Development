function analyzeMarks(marksObj) {
    let total = 0;
    let highest = "";
    let lowest = "";

    let max = -Infinity;
    let min = Infinity;

    for (const subject in marksObj) {
        const mark = marksObj[subject];
        total += mark;

        if (mark > max) {
            max = mark;
            highest = subject;
        }
        if (mark < min) {
            min = mark;
            lowest = subject;
        }
    }

    const average = total / Object.keys(marksObj).length;

    return {
        total: total,
        average: Number(average.toFixed(2)),
        highest: highest,
        lowest: lowest
    };
}

console.log(
    analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 })
);