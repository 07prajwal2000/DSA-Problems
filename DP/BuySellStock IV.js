/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	let dp = Array(prices.length + 1);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = Array(2);
		dp[i][0] = Array(k + 1).fill(0);
		dp[i][1] = Array(k + 1).fill(0);
	}
	const n = prices.length - 1;
	for (let i = n; i >= 0; i--) {
		for (let buy = 0; buy <= 1; buy++) {
			for (let cap = 1; cap <= k; cap++) {
				if (buy === 1) {
					let left = -prices[i] + dp[i + 1][0][cap];
					let right = 0 + dp[i + 1][1][cap];
					dp[i][buy][cap] = max(left, right);
				} else {
					let left = prices[i] + dp[i + 1][1][cap - 1];
					let right = 0 + dp[i + 1][0][cap];
					dp[i][buy][cap] = max(left, right);
				}
			}
		}
	}
	return dp[0][1][k];
};

var max = (l, r) => Math.max(l, r);
// Just modified the dp[] size from 2 to k in (buy sell stock III)