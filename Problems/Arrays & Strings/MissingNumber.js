/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  let sum = (n * (n+1)) >> 1;
  for (let i of nums) {
      sum -= i;
  }
  return sum;
};

console.log(missingNumber([0, 1, 2, 4]));
