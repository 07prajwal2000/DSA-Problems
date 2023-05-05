/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
	const n = nums.length;
	const ans = Array(n);
	let pIdx = 0,
		nIdx = 1;
	for (let i = 0; i < n; i++) {
		if (nums[i] > 0) {
			ans[pIdx] = nums[i];
			pIdx += 2;
		} else {
			ans[nIdx] = nums[i];
			nIdx += 2;
		}
	}
	return ans;
};

var solution1 = (nums, n) => {
	let pos = [],
		neg = [];
	for (let i = 0; i < n; i++) {
		if (nums[i] > 0) {
			pos.push(nums[i]);
		} else {
			neg.push(nums[i]);
		}
	}

	let pIdx = 0,
		nIdx = 0;
	for (let i = 0; i < n; i += 2) {
		nums[i] = pos[pIdx];
		pIdx++;
		nums[i + 1] = neg[nIdx];
		nIdx++;
	}
	return nums;
};
console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
