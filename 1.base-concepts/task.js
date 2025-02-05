"use strict";

let a = 1;

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

console.log(solveEquation(a, b, c));

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

console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));