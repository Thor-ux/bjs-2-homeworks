"use strict";

// Function to solve quadratic equation
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

// Example cases for quadratic equation
let exampleCases = [
    {a: 1, b: 5, c: 4},   
    {a: 1, b: 2, c: 1},  
    {a: 1, b: 1, c: 1},   
    {a: 0, b: 2, c: 1}   
];

exampleCases.forEach((example, index) => {
    console.log(`\nExample Case ${index + 1}: `);
    console.log(`Equation: ${example.a}x^2 + ${example.b}x + ${example.c} = 0`);
    console.log("Result: ", solveEquation(example.a, example.b, example.c));
});

// Function to calculate total mortgage
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

// Example cases for mortgage calculation
const mortgageExamples = [
    {percent: 10, contribution: 0, amount: 50000, countMonths: 12},
    {percent: 10, contribution: 1000, amount: 50000, countMonths: 12},
    {percent: 10, contribution: 20000, amount: 20000, countMonths: 48},
    {percent: 10, contribution: 0, amount: 10000, countMonths: 36},
    {percent: 15, contribution: 0, amount: 10000, countMonths: 36}
];

console.log("\nMortgage Calculation Examples:");
mortgageExamples.forEach((example, index) => {
    console.log(`\nExample ${index + 1}:`);
    console.log(`Percent: ${example.percent}%, Contribution: $${example.contribution}, Amount: $${example.amount}, Months: ${example.countMonths}`);
    console.log("Total Mortgage: $" + calculateTotalMortgage(example.percent, example.contribution, example.amount, example.countMonths));
});