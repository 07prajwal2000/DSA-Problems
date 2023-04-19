/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let goal = 0;
	for (let i = nums.length - 1; i >= 0; i--) {
		if (i + nums[i] >= goal) {
			goal = i;
		}
	}
	return goal == 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0, 0]));
