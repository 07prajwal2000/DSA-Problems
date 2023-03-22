/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let r = 0;
	for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, r, i);
      r++;
    }
	}
	return nums;
};

var swap = (arr, l, r) => {
	const t = arr[l];
	arr[l] = arr[r];
	arr[r] = t;
};

console.log(moveZeroes([0, 1, 0, 3, 0, 0, 0, 12]));
