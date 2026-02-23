console.log('Grade Calculator\n')

let totalMarks = 0;
for (let i = 1; i <= 5; i++) {
    let mark = Number(prompt(`Enter the mark of subject ${i}:`));

    if (isNaN(mark)) {
        alert("Invalid input. Please reload and enter numbers only.");
        break;
    }

    totalMarks += mark;
}

let averageMarks = totalMarks / 5;
let grade;

if (averageMarks >= 90) {
    grade = 'A+'
} else if (averageMarks >= 80) {
    grade = 'A' 
} else if (averageMarks >= 70) {
    grade = 'B'
} else if (averageMarks >= 60) {
    grade = 'C' 
} else if (averageMarks >= 50) {
    grade = 'D' 
} else {
    grade = 'F'     
} 
console.log(`Your grade is ${grade}`); 
alert(`Total marks = ${totalMarks}\nAverage marks = ${averageMarks}\nYour grade is ${grade}`)
