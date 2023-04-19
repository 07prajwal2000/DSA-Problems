/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	const memo = { 0: 0, 1: 1, 2: 2 };
	return climb(n, memo);
};

var climb = (n, memo) => {
	if (n <= 2) return n;
	if (memo[n]) return memo[n];
	let left = climb(n - 1, memo);
	let right = climb(n - 2, memo);
	memo[n] = left + right;
	return left + right;
};
