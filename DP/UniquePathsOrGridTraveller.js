/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let dp = Array(m + 1);
	for (let i = 0; i <= m; i++) {
		dp[i] = Array(n + 1).fill(-1);
	}
	return travel(m, n, dp);
};

var travel = (i, j, dp) => {
	if (i == 1 && j == 1) {
		return 1;
	}
	if (i == 0 || j == 0) return 0;
	if (dp[i][j] !== -1) return dp[i][j];
	dp[i][j] = travel(i - 1, j, dp) + travel(i, j - 1, dp);
	return dp[i][j];
};
