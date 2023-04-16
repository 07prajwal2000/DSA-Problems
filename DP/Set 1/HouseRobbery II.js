/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length == 1) return nums[0];
	let notStart = nums.filter((_, i) => i !== 0);
	let notEnd = nums.filter((_, i) => i !== nums.length - 1);

	return Math.max(r(notStart, nums.length - 2), r(notEnd, nums.length - 2));
};

var r = (nums, i) => {
	if (nums.length == 1) return nums[0];
	const n = nums.length;
	let prev1 = 0;
	let prev2 = 0;

	for (let i = 0; i < n; i++) {
		let r = Math.max(nums[i] + prev2, prev1);
		prev2 = prev1;
		prev1 = r;
	}

	return prev1;
};
