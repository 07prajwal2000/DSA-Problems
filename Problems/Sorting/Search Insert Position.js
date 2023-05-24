var searchInsertK = (arr, n, k) => {
	if (arr[0] >= k) {
		return 0;
	}
	let l = 0,
		r = n - 1;
	while (l <= r) {
		let mid = (l + r) >> 1;
		if (arr[mid] == k) {
			return mid;
		} else if (arr[mid] > k && arr[mid - 1] < k) {
			return mid;
		} else if (arr[mid] > k) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return n;
};
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};