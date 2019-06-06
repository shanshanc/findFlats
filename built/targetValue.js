'use strict';
function targetValue(input, target) {
    var num1 = input[0];
    var num2 = input[1];
    var total = num1 + num2;
    if (total === target)
        return true;
    var residual = target;
    var threshold = Math.min.apply(Math, input);
    while (residual > threshold) {
        if (residual === num1 || residual === num2)
            return true;
        residual = residual - threshold;
    }
    return false;
}
module.exports = targetValue;
