"use strict";

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