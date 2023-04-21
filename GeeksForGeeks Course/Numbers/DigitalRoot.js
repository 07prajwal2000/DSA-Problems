var root = (n) => {
	let digit = 0;
	while (n > 0 || digit > 9) {
		if (n == 0) {
			n = digit;
			digit = 0;
		}
		digit += n % 10;
		n = parseInt(n / 10);
	}
	return digit;
};

console.log(root(8426693));
