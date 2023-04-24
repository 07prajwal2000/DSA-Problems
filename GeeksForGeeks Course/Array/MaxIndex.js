var maxIndex = (A, N) => {
	let maxArr = Array(N).fill(0);
	maxArr[N - 1] = A[N - 1];
	for (let i = N - 2; i >= 0; i--) {
		maxArr[i] = Math.max(A[i], maxArr[i + 1]);
	}

	let max = Number.MIN_SAFE_INTEGER;
	let i = 0,
		j = 0;
	while (i < N && j < N) {
		if (maxArr[j] >= A[i]) {
			max = Math.max(max, j - i);
			j++;
		} else {
			i++;
		}
	}
	return max;
};

console.log(maxIndex([75, 49], 2));