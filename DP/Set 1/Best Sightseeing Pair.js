/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (a) {
	let ans = Number.MIN_VALUE;
	let max = a[0];
	for (let i = 1; i < a.length; i++) {
		ans = Math.max(ans, max + a[i] - i);
		max = Math.max(max, a[i] + i);
	}
	return ans;
};
