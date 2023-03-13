/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenationEasy = function(nums) { // easiest way
  return [...nums, ...nums];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const ans = Array(nums.length * 2);
  nums.forEach((x, i) => {
    ans[i] = x;
    ans[i + nums.length] = x;
  });
  return ans;
};

console.log(getConcatenation([1,2,3]));