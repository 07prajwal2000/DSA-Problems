class Solution {
	//Function to find median of the array elements.
	median(A, N) {
		A.sort(function (a, b) {
			return a - b;
		});
		
		//If median is fraction then convert it to integer and return
		if (N % 2 == 0) {
			let idx = N >> 1; // >>1 is same as dividing with 2
			return (A[idx] + A[idx - 1]) >> 1;
		} else {
			let idx = (N + 1) >> 1;
			return A[idx - 1];
		}
	}
	//Function to find mean of the array elements.
	mean(A, N) {
		
		let sum = 0;
		for (let i of A) {
			sum += i;
		}
		return parseInt(sum / N);
	}
}
