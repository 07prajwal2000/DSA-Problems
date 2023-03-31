/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length == 1) return nums[0];
	const n = nums.length;
	let prev1 = 0;
	let prev2 = 0;

	for (let i = 0; i < n; i++) {
		let r = Math.max(nums[i] + prev2, prev1);
		prev2 = prev1;
		prev1 = r;
	}

	return prev1;

	const memo = {};
	return robbery(nums, nums.length - 1, memo);
};

var robbery = (nums, i, memo) => {
	if (i < 0) return 0;
	if (memo[i]) return memo[i];
	let left = robbery(nums, i - 1, memo);
	let right = robbery(nums, i - 2, memo) + nums[i];
	memo[i] = Math.max(left, right);
	return Math.max(left, right);
};
