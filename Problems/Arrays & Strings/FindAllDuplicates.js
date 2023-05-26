/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		let idx = Math.abs(nums[i]) - 1;
		if (nums[idx] < 0) {
			result.push(Math.abs(idx + 1));
		}
		nums[idx] = -nums[idx];
	}
	return result;
};

function duplicates(a, n) {
	let ans = [];

	for (let i = 0; i < n; i++) {
		let idx = Math.abs(a[i]);
		if (a[idx] < 0) {
			ans.push(idx);
		}
		a[idx] = -a[idx];
	}
	ans.sort((a, b) => a - b);
	return ans.length == 0 ? [-1] : ans;
}
console.log(duplicates([0, 3, 1, 2], 4));
