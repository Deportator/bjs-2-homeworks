"use strict";
function solveEquation(a, b, c) {
  const discriminant = b**2 - 4 * a * c;
  if (discriminant > 0){
  return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
  return [- b / (2 * a)];
  }
  return [];
  }

/*function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}*/
