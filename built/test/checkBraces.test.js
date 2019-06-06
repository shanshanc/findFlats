var checkBraces = require('../checkBraces');
test("checkBraces('(){}[]') to be true", function () {
    expect(checkBraces('(){}[]')).toBeTruthy;
});
test("checkBraces('([{}])') to be true", function () {
    expect(checkBraces('([{}])')).toBeTruthy;
});
test("checkBraces('(}') to be false", function () {
    expect(checkBraces('(}')).toBeFalsy;
});
test("checkBraces('[(])') to be false", function () {
    expect(checkBraces('[(])')).toBeFalsy;
});
test("checkBraces('[({})](]') to be false", function () {
    expect(checkBraces('[({})](]')).toBeFalsy;
});
