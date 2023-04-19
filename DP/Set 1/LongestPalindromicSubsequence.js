/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
	return lcs(s, s.split("").reverse().join(""));
};
var lcs = function (s1, s2) {
	let dp = Array(s1.length);
	for (let i = 0; i < s1.length; i++) {
		dp[i] = Array(s2.length).fill(-1);
	}
	return f(s1, s2, s1.length - 1, s2.length - 1, dp);
};

var f = (s1, s2, i, j, dp) => {
	if (i < 0 || j < 0) {
		return 0;
	}
	if (dp[i][j] != -1) return dp[i][j];
	if (s1[i] == s2[j]) {
		return 1 + f(s1, s2, i - 1, j - 1, dp);
	}
	let l = f(s1, s2, i - 1, j, dp);
	let r = f(s1, s2, i, j - 1, dp);
	dp[i][j] = Math.max(l, r);
	return Math.max(l, r);
};
