/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const map = {}; // Mapping char - Key. [index, count] -> value
	let idx = 1e9;
	for (let i = 0; i < s.length; i++) {
		let c = s[i];

		if (!map[c]) {
			map[c] = [i, 1];
			continue;
		}
		map[c][0] = i;
		map[c][1]++;
	}
	for (let k in map) {
		const [index, count] = map[k];
		if (count > 1) continue;
		idx = Math.min(idx, index);
	}
	return idx == 1e9 ? -1 : idx;
};
