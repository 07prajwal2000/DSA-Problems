/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	let dp = Array(triangle[triangle.length - 1].length);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = triangle[triangle.length - 1][i];
	}

	for (let i = triangle.length - 2; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			let min = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
			dp[j] = min;
		}
	}
	return dp[0];
};
