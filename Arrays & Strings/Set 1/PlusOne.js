
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1, i = digits.length - 1;
  while (carry) {
    if (0 <= i) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        carry = 0;
      }
    } else {
      digits = [1, ...digits];
      carry = 0;
    }
    i--;
  }
  return digits;
};

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([9, 9, 9, 9]));
