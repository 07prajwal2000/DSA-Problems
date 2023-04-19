var toh = (n, from = "a", to = "b", aux = "c") => {
	// code here
	if (n == 1) {
		console.log("move disk 1 from rod " + from + " to rod " + to);
		return Math.pow(2, n) - 1;
	}
	toh(n - 1, from, aux, to);
	console.log("move disk " + n + " from rod " + from + " to rod " + to);
	toh(n - 1, aux, to, from);
	return Math.pow(2, n) - 1;
};

console.log(toh(3) + " Steps");
