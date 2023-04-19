/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num == 1) return true;
	let l = 0,
		r = num;
	while (l < r) {
		let mid = parseInt((l + r) / 2);
		let sqr = mid * mid;

		if (num === sqr) {
			return true;
		} else if (num > sqr) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return false;
};

console.log(isPerfectSquare(16));