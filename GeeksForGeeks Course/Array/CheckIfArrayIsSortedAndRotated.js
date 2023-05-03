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

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
 */
var check = (arr, n) => {
	if (n == 1) return true;
	// checks if it is increasing or decreasing with rotation
	let isIncreasing = arr[0] > arr[n - 1];
	let incCount = 0,
		decCount = 0;

	for (let i = 0; i < n - 1; i++) {
		// this check is if cur less than next element (INCREASING) and if it is decreasing
		// we allow only one exception.
		if (arr[i + 1] > arr[i] && !isIncreasing) {
			decCount++;

			// this check is if cur_ele less than next_ele (Decreasing) and if it is increasing
			// we will allow only single exception.
		} else if (arr[i + 1] < arr[i] && isIncreasing) {
			incCount++;
		}
	}
	// if there are more than 1 un sorted array in array. then return false
	return incCount == 1 || decCount == 1 ? true : false;
};
