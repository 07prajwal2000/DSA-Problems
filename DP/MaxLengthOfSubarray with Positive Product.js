/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
	let max = 0,
		pos = 0,
		neg = 0;
	nums.forEach((x) => {
		if (x == 0) {
			pos = 0;
			neg = 0;
		} else if (x > 0) {
			pos++;
			neg = neg ? neg + 1 : neg;
		} else {
			let t = pos;
			pos = neg ? neg + 1 : neg;
			neg = t + 1;
		}
		max = Math.max(pos, max);
	});
	return max;
};
