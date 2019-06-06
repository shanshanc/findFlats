'use strict'

function targetValue (input, target) {
  let num1 = input[0];
  let num2 = input[1];
  const total = num1 + num2;
  if (total === target) return true;

  let residual = target;
  let threshold = Math.min(...input);

  while (residual > threshold) {
    if (residual === num1 || residual === num2) return true;
    residual = residual - threshold;
  }

  return false;
}

module.exports = targetValue;
