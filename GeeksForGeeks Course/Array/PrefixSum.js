function PrefixSum(arr) {
	this.prefix = Array(arr.length);

	this.prefix[0] = arr[0];

	for (let i = 1; i < arr.length; i++) {
		this.prefix[i] = this.prefix[i - 1] + arr[i];
	}

	this.getSum = (i, j) => {
		if (i == 0) {
			return this.prefix[j];
		} else {
			return this.prefix[j] - this.prefix[i - 1];
		}
	};
}

var ps = new PrefixSum([2, 3, 5, 4, 6, 1]);
console.log(ps.getSum(2, 3));
