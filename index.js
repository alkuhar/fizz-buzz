/**
 * Determines if an array contains numbers divisibly by 3 or 5.
 *
 * @param {array} array Array of numbers
 * @returns {array} arr Returns array of numbers
 *
 */

function fizzBuzzArr(array) {
  var arr = array.slice();
  return arr.map(function(item) {
    return _fizzBuzz(item);
  });
}

function _fizzBuzz(number) {
  let str = ''
  if (number % 3 == 0) { str += "fizz"; }
  if (number % 5 == 0) { str += "buzz"; }
  return str || number;
}

module.exports = fizzBuzzArr;
