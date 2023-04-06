/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let set = new Set();
	let count = 0;
	for (let i of s) {
		if (set.has(i)) {
			set.delete(i);
			count++;
		} else {
			set.add(i);
		}
	}
	return set.size > 0 ? count * 2 + 1 : count * 2;
};
