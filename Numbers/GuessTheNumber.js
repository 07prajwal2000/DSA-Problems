/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let i = 0;
	let j = n;
	let mid = parseInt((i + j) / 2);
	while (true) {
		let ans = guess(mid);
		if (ans > 0) {
			// number is lower than mid
			i = mid + 1;
			mid = parseInt((i + j) / 2);
		} else if (ans < 0) {
			j = mid;
			mid = parseInt((i + j) / 2);
		} else {
			return mid;
		}
	}
};
