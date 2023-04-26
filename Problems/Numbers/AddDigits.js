/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	if (num == 0) return 0;
	else if (num % 9 == 0) return 9;
	else return num % 9;

	// brute force
	let sum = 0;
	while (num) {
		sum = 0;
		while (num) {
			let rem = num % 10;
			sum += rem;
			num = parseInt(num / 10);
		}
		num = sum;
		if (sum <= 9) {
			return sum;
		}
	}
	return 0;
};

console.log(addDigits(38));
