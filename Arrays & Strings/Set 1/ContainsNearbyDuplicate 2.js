/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const map = new Map(); // map value -> index.
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (map.has(n)) {
			const idx = map.get(n);
			if (Math.abs(idx - i) <= k) {
				return true;
			} else {
				map.set(n, i);
			}
		} else {
			map.set(n, i);
		}
	}
	return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
