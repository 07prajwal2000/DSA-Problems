/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	const n = nums.length;
	let l = 0,
		r = n - 1;

	while (l < r) {
		let mid = (l + r) >> 1;

		if (mid & (1 == 1)) mid--;

		if (nums[mid] == nums[mid + 1]) {
			l = mid + 2;
		} else {
			r = mid;
		}
	}
	return nums[l];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
