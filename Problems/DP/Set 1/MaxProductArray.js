/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let max = nums[0];
	let n = nums.length;
	let l = 1,
		r = 1;
	for (let i = 0; i < nums.length; i++) {
		l = (!l ? 1 : l) * nums[i];
		r = (!r ? 1 : r) * nums[n - i - 1];
		max = Math.max(l, r, max);
	}
	return max;
};

console.log(maxProduct([2,3,-2,4]));