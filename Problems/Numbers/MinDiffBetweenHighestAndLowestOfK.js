/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
	let l = 0,
		r = k - 1;
	nums = nums.sort((a, b) => a - b);
	let res = Number.MAX_SAFE_INTEGER;
	while (r < nums.length) {
		res = Math.min(res, Math.abs(nums[r] - nums[l]));
		l++;
		r++;
	}
	return res;
};

console.log(minimumDifference([9, 4, 1, 7], 2)); // 2 => 9 - 7 = 2
