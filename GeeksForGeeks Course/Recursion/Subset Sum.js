var sum = (arr, s) => { // Time O(2^n)
  return f(arr, s, arr.length);
};

var f = (arr, s, n) => {
	if (n == 0) {
		if (s == 0) return 1;
		return 0;
	}
	return f(arr, s, n - 1) + f(arr, s - arr[n-1], n - 1);
};


console.log(sum([10, 20, 15], 25));