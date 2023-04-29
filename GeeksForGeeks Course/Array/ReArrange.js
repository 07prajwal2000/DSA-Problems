var rearrange = (arr, n) => {
	if (n == 1) return;
	let maxi = arr[n - 1] + 1;
	let r = n - 1,
		l = 0;
	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
      // this formula is for encoding 2 numbers in one index.
			arr[i] += (arr[r] % maxi) * maxi;
			r--;
		} else {
			arr[i] += (arr[l] % maxi) * maxi;
			l++;
		}
	}
	for (let i = 0; i < n; i++) {
		arr[i] = parseInt(arr[i] / maxi);
	}
};

let arr = [1969, 2677, 3142, 4631, 4764, 5748, 6476, 6487];
rearrange(arr, arr.length);
console.log(arr);
