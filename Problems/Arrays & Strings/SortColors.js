/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	let zi = 0,
		n = nums.length;
	while (nums[zi] == 0) {
		zi++;
	}
	for (let i = zi; i < n; i++) {
		if (nums[i] == 0) {
			let t = nums[i];
			nums[i] = nums[zi];
			nums[zi] = t;
			zi++;
		}
	}
	for (let i = zi; i < n; i++) {
		if (nums[i] == 1) {
			let t = nums[i];
			nums[i] = nums[zi];
			nums[zi] = t;
			zi++;
		}
	}
};

const arr = [0, 0, 1, 2, 2, 1, 2, 1, 0];
sortColors(arr);
console.log(arr);