/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const set = new Set();
	let l = 0;
	let count = 0;
	for (let r = 0; r < s.length; r++) {
		const ele = s[r];
		if (set.has(ele)) {
			while (s[l] !== s[r]) {
				set.delete(s[l]);
				l++;
			}
			set.delete(s[l]);
			l++;
			set.add(s[r]);
		} else {
			set.add(ele);
			count = Math.max(count, r - l + 1);
		}
	}
	return count;
};

console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabcbb"));
