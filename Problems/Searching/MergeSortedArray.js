function merge(arr1, n, arr2, m) {
	let p1 = 0,
		p2 = 0;
	while (p1 < n) {
		if (arr1[p1] > arr2[p2]) {
			let t = arr1[p1];
			arr1[p1] = arr2[p2];
			arr2[p2] = t;
			rearrange(arr2, m);
		}
		p1++;
	}
}
function rearrange(arr, size) {
	let i = 0;
	while (i < size - 1) {
		if (arr[i] > arr[i + 1]) {
			swap(arr, i, i + 1);
		} else break;
		i++;
	}
}

var swap = (arr, i, j) => {
	let t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
};

var a1 = [1, 35],
	a2 = [6, 9, 13, 15, 20, 25, 29, 46];

merge(a1, a2, a1.length, a2.length);
// rearrange(a2, a2.length);
console.log(a1);
console.log(a2);
