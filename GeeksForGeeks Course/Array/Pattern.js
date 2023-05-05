/**
 * @param {number} n 
 * @returns {number[]}
 */
var pattern = (n) => {
	const ans = [];
	let t = n;
	while (t > 0) {
		ans.push(t);
		t -= 5;
	}
	if (t <= 0) {
		ans.push(t);
		t += 5;
	}
	while (t <= n) {
		ans.push(t);
		t += 5;
	}
	return ans;
};

console.log(pattern(16));