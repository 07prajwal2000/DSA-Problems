var digits = (N) => {
	let d = 1;
	while (N > 0) {
		d += Math.log10(N);
		N--;
	}
	return parseInt(d);
};

console.log(digits(42));
