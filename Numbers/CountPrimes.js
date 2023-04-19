/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	if (n <= 2) return 0;
	let isPrime = Array(n + 1).fill(true);
	let count = 0;
	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			count++;
			for (let j = i * i; j < n; j += i) {
				isPrime[j] = false;
			}
		}
	}
	return count;
};
