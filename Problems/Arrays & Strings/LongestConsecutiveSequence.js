/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const set = new Set(nums);
	let longest = 0;

	for (let i of set) {
		// We check if the previous element is there or not,
		// ex: i is 100 => we check if 99 is there, bcz if 99 is present, then 100 is not the starting of sequence.
		if (!set.has(i - 1)) {
			let len = 0;
			// Check if the next element is there or not.
			while (set.has(i + len)) {
				len++;
			}
			// get the max length of elements.
			longest = Math.max(len, longest);
		}
	}
	return longest;
};
