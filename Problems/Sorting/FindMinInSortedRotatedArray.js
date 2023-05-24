/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	const n = nums.length;
	if (nums[0] < nums[n - 1]) return nums[0];
	let l = 0,
		r = n - 1,
		ans = nums[0];
	while (l <= r) {
		if (nums[l] < nums[r]) {
			ans = Math.min(ans, nums[l]);
			break;
		}

		let mid = (l + r) >> 1;

		if (nums[l] <= nums[mid]) {
			ans = Math.min(ans, nums[l]);
			l = mid + 1;
		} else {
			ans = Math.min(ans, nums[mid]);
			r = mid - 1;
		}
	}
	return ans;
};

console.log(findMin([3, 4, 5, 1, 2]));
