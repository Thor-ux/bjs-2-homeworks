class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }

        const sum = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

        return sum / subjects.length;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");
student.getAverageBySubject("физика");
student.getAverageBySubject("биология");
student.getAverage();

console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("биология")); // 0
console.log(student.getAverage()); // 4.75