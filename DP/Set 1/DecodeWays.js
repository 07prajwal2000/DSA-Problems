/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	if (s[0] == "0") return 0;
	let len = s.length;
	let dp = {};
	dp[len] = 1;
	return calc(s, 0, dp);
};

var calc = (s, i, dp) => {
	if (s[i] == "0") return 0; // for invalid digit
	if (i in dp) return dp[i]; // caching
	let res = calc(s, i + 1, dp);
	// checking if i+1 is out of bounds, and s[i] is in range from 10-26.
	if (
		i + 1 < s.length &&
		(s[i] == "1" || (s[i] == "2" && "0123456".includes(s[i + 1])))
	) {
		res += calc(s, i + 2, dp);
	}
	dp[i] = res;
	return res;
};
