/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
	return catalanNumber(n);
	let dp = Array(n + 1).fill(-1);
	return f(n, dp);
};

var f = (n, dp) => {
	if (n <= 1) return 1;
	if (dp[n] != -1) return dp[n];
	let ans = 0;
	// let i will get the chance to be the root node, then root's left nodes will be i-1 bcz of left nodes are smaller than i, and right nodes will be greater than i, and just multiplying both and adding it to current's sum.
	for (let i = 1; i <= n; i++) {
		ans += f(i - 1, dp) * f(n - i, dp);
	}
	dp[n] = ans;
	return ans;
};

// O(1) space - REFER - https://bit.ly/40hwI1Y
var catalanNumber = (n) => {
	if (n == 1) return 1;

	return fact(2 * n) / (fact(n + 1) * fact(n));
};
var fact = (n) => {
	if (n <= 1) return 1;
	return n * fact(n - 1);
};
