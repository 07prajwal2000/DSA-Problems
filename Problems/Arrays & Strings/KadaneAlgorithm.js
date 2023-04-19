// Max subarray sum.
class Solution {
	//Function to find the sum of contiguous subarray with maximum sum.
	maxSubarraySum(arr, n) {
		// code here
		let sum = 0;
		let max = arr[0];
		for (let i = 0; i < n; i++) {
			sum += arr[i];
			max = Math.max(max, sum);
			if (sum < 0) {
				sum = 0;
			}
		}
		return max;
	}
}
