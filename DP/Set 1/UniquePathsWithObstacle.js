/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	let dp = Array(m + 1);
	for (let i = 0; i <= m; i++) {
		dp[i] = Array(n + 1).fill(0);
	}
	dp[1][0] = 1;

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (grid[i - 1][j - 1]) continue;
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}
	return dp[m][n];
};
