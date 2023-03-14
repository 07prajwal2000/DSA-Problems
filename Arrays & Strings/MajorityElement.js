/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let count = 1;
	let ans = nums[0];
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num === ans) {
			count++;
		} else if (num !== ans) {
			count--;
			if (count === 0) {
				ans = num;
				count = 1;
			}
		}
	}
	return ans;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));
