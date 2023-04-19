/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let i = 0,
		j = nums.length - 1;
	const res = Array(nums.length);
	for (let x = nums.length - 1; x >= 0; x--) {
		const r = abs(nums[j]);
		const l = abs(nums[i]);
		if (l > r) {
			res[x] = nums[i] * nums[i];
			i++;
		} else {
			res[x] = nums[j] * nums[j];
			j--;
		}
	}
	// nums.forEach((x, i) => {
	//     nums[i] = x * x;
	// });
	// return nums.sort((a, b) => a-b);
	return res;
};

var abs = (x) => Math.abs(x);

console.log(sortedSquares([-4, -1, 0, 3, 10]));
