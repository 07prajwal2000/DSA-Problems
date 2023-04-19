var dp = [];
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	dp = Array(cost.length);
	return Math.min(climb(cost, cost.length - 1), climb(cost, cost.length - 2));
};
var climb = (cost, i) => {
	if (i < 0) return 0;
	if (i == 1 || i == 0) return cost[i];
	if (!isNaN(dp[i]) && dp[i] !== 0) return dp[i];
	let left = climb(cost, i - 1);
	let right = climb(cost, i - 2);
	dp[i] = Math.min(left, right) + cost[i];
	return Math.min(left, right) + cost[i];
};
