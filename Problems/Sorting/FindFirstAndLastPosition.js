/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	const n = nums.length;
	if (n == 1 && nums[0] == target) return [0, 0];
	let l = 0,
		r = n - 1;
	while (l <= r) {
		const mid = (l + r) >> 1;
		if (nums[mid] == target) {
			return findIndex(nums, mid, target);
		} else if (nums[mid] > target) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return [-1, -1];
};

var findIndex = (nums, i, t) => {
	let s = i,
		e = i;
	const n = nums.length;
	while (s >= 0) {
		if (nums[s] != t) break;
		s--;
	}
	while (e < n) {
		if (nums[e] != t) break;
		e++;
	}
	return [s + 1, e - 1];
};
