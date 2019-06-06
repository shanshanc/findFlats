// Example:
// targetValue([10, 20], 30); // true
// targetValue([10, 20], 40); // true
// targetValue([10, 20], 50); // true
// targetValue([10, 20], 35); // false
// targetValue([10, 20], 10); // false
var targetValue = require('../targetValue');
test('targetValue([10, 20], 30) to be true', function () {
    expect(targetValue([10, 20], 30)).toBeTruthy;
});
test('targetValue([10, 20], 40) to be true', function () {
    expect(targetValue([10, 20], 40)).toBeTruthy;
});
test('targetValue([10, 20], 50) to be true', function () {
    expect(targetValue([10, 20], 50)).toBeTruthy;
});
test('targetValue([10, 20], 35) to be true', function () {
    expect(targetValue([10, 20], 35)).toBeFalsy;
});
test('targetValue([10, 20], 10) to be true', function () {
    expect(targetValue([10, 20], 10)).toBeFalsy;
});
