// highestOccurrence([2, 3, 2, 2, 2, 4, 2]); // [2]
// highestOccurrence([2, 3, 2, 3, 2, 3, 4]); // [2, 3]
// highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a']); // ['a']
// highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4]); // ['a', 2]

const highestOccurrence = require('../highestOccurrence');

test('[2, 3, 2, 2, 2, 4, 2] should be [2]', () => {
  expect(highestOccurrence([2, 3, 2, 2, 2, 4, 2])).toEqual([2]);
});

test('[2, 3, 2, 3, 2, 3, 4] should be [2,3]', () => {
  expect(highestOccurrence([2, 3, 2, 3, 2, 3, 4])).toEqual([2,3]);
});

test("['a', 'b', 'c', 'a', 'a', 'a', 'a'] should be ['a']", () => {
  expect(highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a'])).toEqual(['a']);
});

test("['a','a', 2, 2, 2, 'a', 4] should be ['a',2]", () => {
  expect(highestOccurrence(['a','a', 2, 2, 2, 'a', 4])).toContain('a', 2);
});
