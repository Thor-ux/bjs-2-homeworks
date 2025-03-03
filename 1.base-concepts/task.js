"use strict";

function solveEquation(a,  b,  c) {
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1,  x2];
  }
}

function calculateTotalMortgage(percent,  contribution,  amount,  countMonths) {
  // Преобразуем процентную ставку
  const monthlyInterest = percent / 100 / 12;
  
  // Рассчитываем тело кредита
  const principal = amount - contribution;
  
  if (principal <= 0) {
    return 0;
  }
  
  // Рассчитываем ежемесячный платеж
  const monthlyPayment = principal * (monthlyInterest + (monthlyInterest / (Math.pow(1 + monthlyInterest,  countMonths) - 1)));
  
  // Рассчитываем общую сумму
  const totalAmount = monthlyPayment * countMonths;
  
  // Округляем до двух знаков после запятой
  return Number(totalAmount.toFixed(2));
}
