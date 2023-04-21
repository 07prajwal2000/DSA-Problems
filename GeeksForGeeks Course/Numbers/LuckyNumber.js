var isLucky = (n, counter = 2) => {
	if (counter > n) return true;
	if (n % counter == 0) return false;
	let next = n - parseInt(n / counter);
	counter++;
	return isLucky(next, counter);
};
