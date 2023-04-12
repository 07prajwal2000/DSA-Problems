/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	return fasterSoln(nums);
	if (nums.length < 3) return 0;
	let diff = Array(nums.length).fill(0);
	for (let i = 1; i < nums.length; i++) {
		diff[i - 1] = nums[i] - nums[i - 1];
	}

	let count = 0;
	for (let i = 0; i + 2 < diff.length; i++) {
		let j = i + 3;
		let ii = 0;
		while (j <= diff.length) {
			if (equal(diff, ii, j - 1)) {
				count++;
			}
			ii++;
			j++;
		}
	}
	return count;
};

var fasterSoln = (n) => {
	let cur = 0,
		total = 0;
	for (let i = 2; i < n.length; i++) {
		if (n[i] - n[i - 1] === n[i - 1] - n[i - 2]) {
			cur++;
			total += cur;
		} else {
			cur = 0;
		}
	}
	return total;
};

var equal = (diff, i, j) => {
	let eq = diff[i];
	while (i < j) {
		if (diff[i] !== eq) {
			return false;
		}
		i++;
	}
	return true;
};
console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10]));
