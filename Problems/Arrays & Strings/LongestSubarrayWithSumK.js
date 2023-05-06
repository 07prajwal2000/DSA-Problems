var subarraySumWithK = (a, k) => {
	let cur = 0;
	let left = 0,
		c = 0;
	let n = a.length;
	for (let i = 0; i < n; i++) {
		cur += a[i];
		while (cur > k && left <= i) {
			cur -= a[left];
			left++;
		}
		if (cur == k) {
			c = Math.max(i - left + 1, c);
		}
	}
	return c;
};

console.log(subarraySumWithK([8, 15, 17, 0, 11], 17));

console.log(subarraySumWithK([1, 2, 1, 3], 2));
console.log(subarraySumWithK([1, 2, 3, 1, 1, 1, 1], 3));
