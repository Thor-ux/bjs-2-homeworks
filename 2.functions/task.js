"use strict";

const functions = {
  getArrayParams: function(...arr) {
    if (arr.length === 0) {
      return { min: 0, max: 0, avg: 0 };
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = Number((arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2));
    return { min, max, avg };
  },

  summElementsWorker: function(...arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  },

  differenceMaxMinWorker: function(...arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr);
  },

  differenceEvenOddWorker: function(...arr) {
    return arr.reduce((diff, num) => num % 2 === 0 ? diff + num : diff - num, 0);
  },

  averageEvenElementsWorker: function(...arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) return 0;
    return Math.round(evenNumbers.reduce((sum, num) => sum + num) / evenNumbers.length);
  },

  makeWork: function(arrOfArr, func) {
    return arrOfArr.reduce((max, arr) => {
      const result = func(...arr);
      return result > max ? result : max;
    }, -Infinity);
  }
};

// To make the functions globally accessible:
Object.assign(window, functions);
