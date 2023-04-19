var gcdFast = (a, b) => {
	if (b == 0) return a;
	return gcd(b, a % b);
};

/**
 *
 * @param {number} a
 * @param {number} b
 */
var lcm = (a, b) => {
	let ans = Math.max(a, b);
	while (1) {
		if (ans % a == 0 && ans % b == 0) break;
		ans++;
	}
	return ans;
};

console.log(lcm(4, 6));