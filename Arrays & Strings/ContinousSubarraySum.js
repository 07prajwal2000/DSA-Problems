/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	let sum = 0;
	const remainders = new Map(); // mapping remainders to index
  remainders.set(0, -1);
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		const mod = sum % k;
    const has = remainders.has(mod);
		if (!has) {
			remainders.set(mod, i);
		} else if (i - remainders.get(mod) > 1) {
			return true;
		}
	}
	return false;
};

console.log(checkSubarraySum([1, 2, 3], 5));
