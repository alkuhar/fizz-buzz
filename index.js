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
    return _fizzBuzz(item) ? _fizzBuzz(item) : item;
  });
}

function _fizzBuzz(number) {
  if(number % 3 == 0) { return "fizz"; }
  else if(number % 5 == 0) { return "buzz"; }
  else return false;
}

module.exports = fizzBuzzArr;
