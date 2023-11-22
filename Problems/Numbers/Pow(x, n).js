/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	let nn = n < 0 ? -n : n;
	let ans = 1;
	while (nn) {
		if (nn % 2) {
			ans *= x;
			nn--;
		} else {
			x *= x;
			nn = nn / 2;
		}
	}
	if (n < 0) ans = 1 / ans;
	return ans;
};

console.log(myPow(2, 10)); // 1024