/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.length === 0) return 0;

	let curSum = 0;
	let count = 0;
	const map = {};
	for (let n of nums) {
		curSum += n;
		if (k === curSum) {
			count++;
		}
		if (map[curSum - k]) {
			count += map[curSum - k];
		}
		map[curSum] = map[curSum] ? (map[curSum] + 1) : 1;
	}
	return count;
};

console.log(subarraySum2([1, -1, 0], 0));
console.log(subarraySum2([1, 1, 1], 2));
console.log(subarraySum2([1, 2, 3, 5, 8], 6));
