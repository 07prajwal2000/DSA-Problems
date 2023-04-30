var missingNumber = (arr, n) => {
	const set = new Set(); // keeps track of +ve elements
	let max = -1e9;
	for (let i = 0; i < n; i++) {
		if (arr[i] < 0) continue;
		max = Math.max(arr[i], max); // also get the max num in arr to traverse
		set.add(arr[i]);
	}

	for (let i = 1; i <= max; i++) {
		// we traverse from 1 -> max, bcz we need smallest missing
		if (!set.has(i)) {
			// check if i contains in hashSet, if not that is the element.
			return i;
		}
	}
	return max + 1; // if all the element is there, then the next greater to max element is missing
};

console.log(missingNumber([1, 2, 3, 4, 5], 5));
