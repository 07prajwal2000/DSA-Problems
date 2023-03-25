/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let temp = x, sum = 0, rem = 0;
  while (x > 0) {
    rem = parseInt(x % 10);
    sum = (sum * 10) + rem
    x = parseInt(x/10);
  }
  return temp == sum;
};

console.log(isPalindrome(1211));