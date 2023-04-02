/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
	const dp = Array(10001).fill(0);
	for (let i of nums) {
		const idx = parseInt(i);
		dp[idx] += idx;
	}
	return r(dp);
};

var r = (nums) => {
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
};
