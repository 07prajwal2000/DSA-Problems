/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	let l = 0,
		r = n;
	let res = 0;
	while (l <= r) {
		let mid = parseInt((l + r) / 2);
		let c = (mid * (mid + 1)) / 2;
		if (c > n) {
			r = mid - 1;
		} else {
			l = mid + 1;
			res = Math.max(res, mid);
		}
	}
	return res;
};

console.log(arrangeCoins(5)); // 2