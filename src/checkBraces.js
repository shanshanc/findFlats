'use strict'

function checkBraces (input) {
  const starts = /[({[]/;
  const ends = /[)\]}]/;
  if (ends.test(input[0])) return false;
  
  let braces = '';
  const splitted = input.split('');

  // Loop over to check if the element is left-sided braces: (, { or [
  // If so, add to a list. If not, see if we can cancel it out with existing ones
  for (let i = 0; i < splitted.length; i++) {
    let char = splitted[i];
    if (starts.test(char)) {
      braces += char;
    }
    if (char === ']' && braces[braces.length-1] === '[') braces = braces.slice(0, braces.length-1);
    if (char === '}' && braces[braces.length-1] === '{') braces = braces.slice(0, braces.length-1);
    if (char === ')' && braces[braces.length-1] === '(') braces = braces.slice(0, braces.length-1);
  }
  console.log('braces: ', braces);
  // If the list is balanced out, return true. Otherwise return false
  if (braces === '') return true;
  return false;
}

module.exports = checkBraces;
