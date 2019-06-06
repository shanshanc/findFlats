'use strict';
function highestOccurrence(input) {
    if (!Array.isArray(input) || input.length === 0)
        return [];
    var maxFreq = 0;
    var res = [];
    var occurances = {};
    // Calculate frequency
    for (var i = 0; i < input.length; i++) {
        var item = input[i];
        if (occurances[item] === undefined)
            occurances[item] = 1;
        else
            occurances[item]++;
    }
    // Find the highest occurrence
    for (var item in occurances) {
        if (occurances[item] === maxFreq) {
            if ('0123456789'.indexOf(item) === -1)
                res.push(item);
            else
                res.push(Number(item));
        }
        else if (occurances[item] > maxFreq) {
            maxFreq = occurances[item];
            if ('0123456789'.indexOf(item) === -1)
                res = [item];
            else
                res = [Number(item)];
        }
    }
    return res;
}
module.exports = highestOccurrence;
