/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let dp = Array(prices.length + 1);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = Array(2);
		dp[i][0] = Array(3).fill(0);
		dp[i][1] = Array(3).fill(0);
	}
	const n = prices.length - 1;
	for (let i = n; i >= 0; i--) {
		for (let buy = 0; buy <= 1; buy++) {
			for (let cap = 1; cap <= 2; cap++) {
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
	return dp[0][1][2];
	// MEMO
	let dp2 = {};
	return f(prices, 0, 2, true, dp2);
};

var f = (prices, i, cap, canBuy, dp) => {
	if (i === prices.length || cap === 0) return 0;
	let key = `${i}-${cap}-${canBuy}`;
	if (dp[key]) return dp[key];
	if (canBuy) {
		let left = -prices[i] + f(prices, i + 1, cap, false, dp);
		let right = 0 + f(prices, i + 1, cap, true, dp);
		dp[key] = max(left, right);
		return max(left, right);
	}
	let l = prices[i] + f(prices, i + 1, cap - 1, true, dp);
	let r = 0 + f(prices, i + 1, cap, false, dp);
	dp[key] = max(l, r);
	return max(l, r);
};

let max = (l, r) => Math.max(l, r);
