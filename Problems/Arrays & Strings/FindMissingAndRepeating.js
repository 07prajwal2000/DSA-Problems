function findMissingRepeatingNumbers(a) {
	const set = new Set();
	let n = a.length;

	let miss = (n * (n + 1)) >> 1,
		repeat = -1;

	for (let i = 0; i < n; i++) {
		if (set.has(a[i])) {
			repeat = a[i];
		} else {
			miss -= a[i];
		}
    set.add(a[i]);
	}
	return [repeat, miss];
}

console.log(findMissingRepeatingNumbers([1, 2, 3, 2]));