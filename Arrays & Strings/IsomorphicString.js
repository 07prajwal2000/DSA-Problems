/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	const h1 = {};
	const h2 = {};

	for (let i = 0; i < s.length; i++) {
		const left = s[i];
		const right = t[i];

		if (h1[left]) {
			if (h1[left] !== right) {
				return false;
			}
		} else {
			h1[left] = right;
		}

		if (h2[right]) {
			if (h2[right] !== left) {
				return false;
			}
		} else {
			h2[right] = left;
		}
	}

	return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc", "baba"));
