/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let max = 2147483648;

	let temp = 0;
	let t = x > 0 ? x : -x; // checking if input val is less than 0. if so we reverse it to positive.
	let neg = x < 0;

	while (t > 0) {
		let mod = t % 10; // getting the last number
		temp = temp * 10 + mod; // multiplying the remainder with 10 to get the required digit
		t = parseInt(t / 10); // Integer division
	}
	// handling 32-bit OUT_OF_BOUNDS
	if (max - 1 < temp || (-max > temp && temp < 0)) return 0;
	return neg ? -temp : temp;
};
