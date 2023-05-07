/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
	const ans = [];
	const n = arr.length;
	arr = arr.sort((a, b) => a - b);
	for (let i = 0; i < n; i++) {
		if (i > 0 && arr[i - 1] == arr[i]) continue;
		for (let j = i + 1; j < n; j++) {
			if (j > i + 1 && arr[j - 1] == arr[j]) continue;

			let left = j + 1;
			let right = n - 1;
			while (left < right) {
				const sum = arr[i] + arr[j] + arr[left] + arr[right];
				if (sum == target) {
					ans.push([arr[i], arr[j], arr[left], arr[right]]);
					left++;
					right--;
					while (left < right && arr[left - 1] == arr[left]) left++;
					while (left < right && arr[right + 1] == arr[right])
						right--;
				} else if (sum < target) {
					left++;
				} else {
					right--;
				}
			}
		}
	}
	return ans;
};
