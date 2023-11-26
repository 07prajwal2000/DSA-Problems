/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
	return mergeSort(nums);
};

function mergeSort(arr) {
	const merge = (l, m, r) => {
		let temp = [];
		let left = l,
			right = m + 1;
		while (left <= m && right <= r) {
			if (arr[left] < arr[right]) {
				temp.push(arr[left]);
				left++;
			} else {
				temp.push(arr[right]);
				right++;
			}
		}
		while (left <= m) {
			temp.push(arr[left]);
			left++;
		}
		while (right <= r) {
			temp.push(arr[right]);
			right++;
		}
		let idx = 0;
		for (let i = l; i <= r; i++) {
			arr[i] = temp[idx];
			idx++;
		}
	};
	const mergeS = (left, right) => {
		let c = 0;
		if (left >= right) return c;
		const mid = (left + right) >> 1;
		c += mergeS(left, mid);
		c += mergeS(mid + 1, right);
		c += count(arr, left, mid, right);
		merge(left, mid, right);
		return c;
	};

	return mergeS(0, arr.length - 1);
}

function count(arr, low, m, high) {
	let c = 0,
		right = m + 1;
	for (let i = low; i <= m; i++) {
		while (right <= high && arr[i] > 2 * arr[right]) {
			right++;
		}
		c += right - (m + 1);
	}
	return c;
}

reversePairs([1, 3, 2, 3, 1]); // 2
