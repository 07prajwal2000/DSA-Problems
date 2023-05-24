/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	const n = nums.length;
	let l = 0,
		r = n - 1;
	while (l <= r) {
		let mid = (l + r) >> 1;
		if (nums[mid] == target) {
			return true;
		}
		if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
			l++;
			r--;
		} else if (nums[l] <= nums[mid]) {
			if (target >= nums[l] && target <= nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		} else {
			if (target >= nums[mid] && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}
	return false;
};
