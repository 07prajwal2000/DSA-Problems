/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n <= 1) return n;
	let prev2 = 0;
	let prev = 1;
	for (let i = 1; i < n; i++) {
		let cur = prev2 + prev;
		prev2 = prev;
		prev = cur;
	}
	return prev;
};
