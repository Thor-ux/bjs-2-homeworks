function getArrayParams(...arr) {
  if (arr.length === 0) {
      return { min: 0, max: 0, avg: 0 };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}
console.log(getArrayParams(-99, 99, 10));
// Output: { min: -99, max: 99, avg: 3.33 }

console.log(getArrayParams(1, 2, 3, -100, 10));
// Output: { min: -100, max: 10, avg: -16.80 }

console.log(getArrayParams(5));
// Output: { min: 5, max: 5, avg: 5.00 

// 1. Summing
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, element) => sum + element, 0);
}

// 2. Difference between max and min 
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

// 3. Difference between sums of even and odd 
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  
  return sumEvenElement - sumOddElement;
}

// 4. Average of even elements
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}
console.log(summElementsWorker(10, 10, 11, 20, 10));
// Output: 61

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
// Output: 10

console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Output: -5

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Output: 5

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
// The worker functions from the previous task

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));  //  output 328
console.log(makeWork(arr, differenceMaxMinWorker));  //  output 86
console.log(makeWork(arr, differenceEvenOddWorker));  //  output 92
console.log(makeWork(arr, averageEvenElementsWorker));  //  output 72