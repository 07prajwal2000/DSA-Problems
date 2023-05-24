var merge = (arr, low, mid, high) => {
	let left = low,
		right = mid + 1;
	let temp = [];

	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right]) {
			temp.push(arr[left]);
			left++;
		} else {
			temp.push(arr[right]);
			right++;
		}
	}
	while (left <= mid) {
		temp.push(arr[left]);
		left++;
	}
	while (right <= high) {
		temp.push(arr[right]);
		right++;
	}
  let j = 0;
	for (let i = low; i <= high; i++) {
		arr[i] = temp[j];
    j++;
	}
};

var mergeSort = (arr, low = 0, high = arr.length - 1) => {
	if (low >= high) return;
	const mid = (low + high) >> 1;
	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);

	merge(arr, low, mid, high);
};

const arr = [3, 1, 4, 2, 6, 5];
for (let i = 0; i < 10_000; i++) {
  arr.push(parseInt(Math.random() * 100_000));
}
let timeStamp = new Date()
mergeSort(arr);
console.log(new Date() - timeStamp);
