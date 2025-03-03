"use strict";

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  return arr.reduce((diff, num) => {
    return num % 2 === 0 ? diff + num : diff - num;
  }, 0);
}

function averageEvenElementsWorker(...arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) return 0;
  return evenNumbers.reduce((sum, num) => sum + num) / evenNumbers.length;
}

function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
}

//
module.exports = {
  getArrayParams,
  summElementsWorker,
  differenceMaxMinWorker,
  differenceEvenOddWorker,
  averageEvenElementsWorker,
  makeWork
};