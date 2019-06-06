const checkBraces = require('../checkBraces');

test("checkBraces('(){}[]') to be true", () => {
  expect(checkBraces('(){}[]')).toBeTruthy;
});

test("checkBraces('([{}])') to be true", () => {
  expect(checkBraces('([{}])')).toBeTruthy;
});

test("checkBraces('(}') to be false", () => {
  expect(checkBraces('(}')).toBeFalsy;
});

test("checkBraces('[(])') to be false", () => {
  expect(checkBraces('[(])')).toBeFalsy;
});

test("checkBraces('[({})](]') to be false", () => {
  expect(checkBraces('[({})](]')).toBeFalsy;
});
