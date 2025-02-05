"use strict"

// Examples
let exampleCases = [
    {a: 1, b: 5, c: 4},   
    {a: 1, b: 2, c: 1},  
    {a: 1, b: 1, c: 1},   
    {a: 0, b: 2, c: 1}   
];
let index = 0

exampleCases.forEach((example, index) => {
    console.log(`\nexampleCases ${index + 1}: `);
    console.log(`Equation: ${example.a}x^2 + ${example.b}x + ${example.c} = 0`);
    console.log("Result: ", solveEquation(example.a, example.b, example.c));
});

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        return [];
    }
    
    if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    }
    
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    return [root1, root2];
}

// Variables
let percent, contribution, amount, countMonths;

// example 1
percent = 10;
contribution = 0;
amount = 50000;
countMonths = 12;

console.log("\nMortgage Example 1:");
console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

// example 2
percent = 10;
contribution = 1000;
amount = 50000;
countMonths = 12;

console.log("\nMortgage Example 2:");
console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

// example 3
percent = 10;
contribution = 20000;
amount = 20000;
countMonths = 48;

console.log("\nMortgage Example 3:");
console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

// example 4
percent = 10;
contribution = 0;
amount = 10000;
countMonths = 36;

console.log("\nMortgage Example 4:");
console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

// example 5
percent = 15;
contribution = 0;
amount = 10000;
countMonths = 36;

console.log("\nMortgage Example 5:");
console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyRate = percent / 100 / 12;
    const principal = amount - contribution;
    if (principal <= 0) {
        return 0;
    }
    const monthlyPayment = principal * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
    const totalPaid = (monthlyPayment * countMonths) + contribution;
    return Number(totalPaid.toFixed(2));
}
