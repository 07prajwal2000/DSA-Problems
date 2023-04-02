/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let total = nums.reduce((a, b) => a + b);
	let leftSum = 0;
	for (let i = 0; i < nums.length; i++) {
		let n = nums[i];
		let rightSum = total - n - leftSum;
		if (leftSum === rightSum) {
			return i;
		}
		leftSum += n;
	}
	return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
