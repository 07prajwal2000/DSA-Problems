/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const ans = Array(nums.length);
	const n = nums.length;
	for (let i = 0; i < nums.length; i++) {
    const iter = (i + k) % n;
		ans[iter] = nums[i];
	}
	return ans;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1,-100,3,99], 2));
