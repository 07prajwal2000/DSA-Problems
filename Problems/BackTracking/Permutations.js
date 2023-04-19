/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let res = [];
	if (nums.length === 1) {
		return [[...nums]];
	}
	for (let i of nums) {
		const n = nums.shift();
		const a = permute(nums);
		for (let j of a) {
			j.push(n);
		}
		res = [...res, ...a];
		nums.push(n);
	}
	return res;
};

permute([1, 2, 3]);