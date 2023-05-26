// qns is also => Find rotated position element in sorted rotated array
/**
 * @param {number[]} arr
 * @return {number}
 */
 var findMin = (arr) => {
	let n = arr.length;
  if (arr[0] <= arr[n - 1]) return arr[0];
	let l = 0, r = n - 1;

	while (l < r) {
		let mid = (l + r) >> 1;
		if (arr[mid] < arr[mid - 1]) {
			return arr[mid];
		}
		if (arr[mid + 1] < arr[mid]) {
			return arr[mid + 1];
		}
		if (arr[mid] >= arr[l]) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return arr[l];
};


var findMin1 = function(nums) {
    const n = nums.length;
	if (nums[0] < nums[n - 1]) return nums[0];
	let l = 0, r = n - 1,ans = nums[0];
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