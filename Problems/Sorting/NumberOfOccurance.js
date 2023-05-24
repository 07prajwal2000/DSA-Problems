var count = (nums, n, target) => {
	var findIndex = (nums, i, t) => {
		let s = i,
			e = i;
		const n = nums.length;
		let count = 0;
		while (s >= 0) {
			if (nums[s] != t) break;
			s--;
			count++;
		}
		while (e < n) {
			if (nums[e] != t) break;
			e++;
			count++;
		}
		return count - 1;
	};

	if (n == 1 && nums[0] == target) return 1;
	let l = 0,
		r = n - 1;
	while (l <= r) {
		const mid = (l + r) >> 1;
		if (nums[mid] == target) {
			return findIndex(nums, mid, target);
		} else if (nums[mid] > target) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return 0;
};
