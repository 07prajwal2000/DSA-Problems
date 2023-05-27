function kthElement(arr, brr, n, m) {
	let l1 = 0,
		l2 = 0,
		cur = arr[0];
	while (l1 < n && l2 < m) {
		if (l1 + l2 == k) {
			return cur;
		}
		if (arr[l1] <= brr[l2]) {
			cur = arr[l1];
			l1++;
		} else {
			cur = brr[l2];
			l2++;
		}
	}
	while (l1 < n && l1 + l2 < k) {
		cur = arr[l1];
		l1++;
	}
	while (l2 < m && l1 + l2 < k) {
		cur = brr[l2];
		l2++;
	}
	return cur;
}
