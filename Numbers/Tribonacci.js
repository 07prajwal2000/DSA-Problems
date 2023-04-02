/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	if (n <= 1) return n;
	let prev3 = 0;
	let prev2 = 0;
	let prev = 1;
	for (let i = 1; i < n; i++) {
		let cur = prev2 + prev + prev3;
		prev3 = prev2;
		prev2 = prev;
		prev = cur;
	}
	return prev;
};
Number.max