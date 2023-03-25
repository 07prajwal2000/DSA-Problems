/**
 * @param {string[]} s
 * @return {string}
 */
var longestCommonPrefix = function (s) {
	let res = "";
	for (let i = 0; i < s[0].length; i++) {
		for (let str of s) {
			if (i === str.length || str[i] !== s[0][i]) {
				return res;
			}
		}
		res += s[0][i];
	}
	return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(['flower', 'flower', 'flower']));
