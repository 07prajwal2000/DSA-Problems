/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  const left = Array(nums.length);
  left[0] = 1;

  for (let i = 1; i < nums.length; i++) {
      left[i] = left[i - 1] * nums[i - 1];
  }

  const right = Array(nums.length);
  right[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0 ; i--) {
      right[i] = right[i + 1] * nums[i + 1];
  }

  const ans = [];

  left.forEach((_, i) => {
      const mul = left[i] * right[i];
      ans.push(mul);
  });
  return ans;
};

console.log(productExceptSelf([1,2,3,4]));