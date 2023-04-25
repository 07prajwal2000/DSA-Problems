/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
	let n = nums.length;
	let sorted = false;
	let j = 0;
	for (j = 1; j < n; j++) {
		if (nums[j] < nums[j - 1]) {
			break;
		}
	}
	if (j == n) return true;

	let flag = false;
	let rotated = nums[0] >= nums[n - 1];

	for (let i = 1; i < n; i++) {
		if (flag && nums[i] < nums[i - 1]) {
			return false;
		}
		if (nums[i] < nums[i - 1]) {
			flag = true;
			sorted = true;
		}
	}
	return sorted && rotated;
};
