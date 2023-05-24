/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	const n = nums.length;
	let l = 0,
		r = n - 1;
	while (l <= r) {
		let mid = (l + r) >> 1;
		if (nums[mid] == target) {
			return mid;
		}
		if (nums[l] <= nums[mid]) {
			if (target >= nums[l] && target <= nums[mid]) {
				r = mid - 1;
			} else l = mid + 1;
		} else {
			if (target >= nums[mid] && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}
	return -1;
};

console.log(search([5, 1, 3], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([0, 1, 2, 4, 5, 6, 7], 0));
