/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
	let c = 0,
		n = s.length;
	const set = new Set(["a", "e", "i", "o", "u"]);
	for (let i = 0; i < k; i++) {
		if (set.has(s[i])) {
			c++;
		}
	}
	if (n == k) {
		return c;
	}
	let max = c;
	let j = k; // fast index for sliding-window
	for (let i = 0; j < n; i++) {
		if (set.has(s[i])) {
			c--;
		}
		if (set.has(s[j])) {
			c++;
		}
		max = Math.max(max, c);
		j++;
	}
	return max;
};
