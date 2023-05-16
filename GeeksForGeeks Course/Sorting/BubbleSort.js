/**
 * O(n^2)
 * @param {number[]} arr
 */
var sort = (arr) => {
	const n = arr.length;

	// optimized
	for (let i = 0; i < n - 1; i++) {
		let swapped = 0;

		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swapped = 1;
				let t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}

		if (!swapped) break;
	}
	return arr;

	// slow
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			if (arr[i] > arr[j]) {
				let t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
		}
	}
	return arr;
};

console.log(sort([1, 2, 6, 4, 5, 7, 8, 3, 2, 44, 66, 74, 22, 34, 98, 12, 34]));
