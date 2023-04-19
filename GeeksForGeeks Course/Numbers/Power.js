var pow = (base, power) => { // Time - O(power)
	let ans = 1;
	for (let i = 0; i < power; i++) {
		ans *= base;
	}
  return ans;

	// RECURSION
	// if (power <= 1) return base;
	// return base * pow(base, power - 1);
};

// time - O(log(n))
var powFast = (base, power) => {
	let ans = 1;
	while (power > 0) {
    
    if (power & 1) {
      ans *= base;
    }

    base *= base;
    power = parseInt(power / 2);
  }
  return ans;

	// RECURSION
	// if (power <= 1) return base;
	// return base * pow(base, power - 1);
};

console.log(powFast(2, 8));
