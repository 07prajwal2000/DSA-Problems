/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	let dp = Array(matrix.length);
	for (let i = 0; i < matrix.length; i++) {
		dp[i] = Array(matrix[0].length).fill(-1);
	}
	let min = Number.MAX_VALUE;
	for (let i = 0; i < matrix.length; i++) {
		min = Math.min(min, f(matrix, matrix.length - 1, i, dp));
	}
	return min;
};

var f = (grid, i, j, dp) => {
	if (j >= grid[0].length || j < 0) {
		return Number.MAX_VALUE;
	}
	if (dp[i][j] != -1) return dp[i][j];
	if (i == 0) return grid[0][j];

	let mid = grid[i][j] + f(grid, i - 1, j, dp);
	let left = grid[i][j] + f(grid, i - 1, j - 1, dp);
	let right = grid[i][j] + f(grid, i - 1, j + 1, dp);
	let min = Math.min(mid, left, right);
	dp[i][j] = min;
	return min;
};
// sample diagram explaination- https://assets.leetcode.com/users/images/b5a682dd-8750-4102-90ee-d7b808b2bc93_1681495509.4448056.png