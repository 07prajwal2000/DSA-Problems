const Exactly3Divisors = (N) => {
	var isPrime = (n) => {
		let f = 2;
    while (f * f <= n) {
      if (n % f == 0) return false;
      f++;
    }
    return true;
	};

	let i = 2, count = 0;
  while (i * i <= N) {
    if (isPrime(i)) {
      count++;
    }
    i++;
  }
	return count;
};

console.log(Exactly3Divisors(999999));