var getMax = (arr, n) => {
	let max1 = -1,
		max2 = -1;
	for (let i of arr) {
		if (i > max1) {
			max2 = max1;
			max1 = i;
		} else if (i > max2 && i < max1) {
			max2 = i;
		}
	}
	return [max1, max2];

	// if (n == 1) {
	//     return [arr[0], -1];
	// }
	// // code here
	// arr = arr.sort((x, y) => (y-x));
	// let max1 = arr[0];
	// let max2 = -1;
	// for (let i = 0; i < n; i++) {
	//     if (arr[i] != max1) {
	//         max2 = arr[i];
	//         break;
	//     }
	// }
	// return [max1, max2];
};
