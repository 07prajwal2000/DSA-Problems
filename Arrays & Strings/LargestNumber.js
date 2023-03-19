/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].toString();
  }
  nums.sort((a, b) => {
    if ((a + b) > (b + a)) {
      return -1;
    } else {
      return 1;
    }
  });
  const nAsStr = nums.join('');
  return parseInt(nAsStr) === 0 ? '0' : nAsStr;
};

console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([999999998,999999997,999999999]));