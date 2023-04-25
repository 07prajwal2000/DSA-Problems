var reverse = (arr, n, k) => {
	if (n == 1) return;
	var rev = (s, e) => {
		while (s < e) {
			let t = arr[s];
			arr[s] = arr[e];
			arr[e] = t;
			s++;
			e--;
		}
	};

	for (let i = 0; i < n; i += k) {
		let left = i;
    // we get the last index, based on group, 
    // if group + i > n then we will take n-1 as the right.
    
		let right = Math.min(i + k - 1, n - 1); 
		rev(left, right);
	}
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
reverse(arr, arr.length, 3);
console.log(arr);
