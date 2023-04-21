var rotate = function (nums, k) {
	rotateWithNoSpace(nums, k);
	// rotateWithSpace(nums, k);
};

var rotateWithNoSpace = (nums, k) => {
	// Time - O(n)
	if (nums.length == 1) return;
	var r = (l, r) => {
		while (l < r) {
			swap(l, r);
			l++;
			r--;
		}
	};

	var swap = (l, r) => {
		let t = nums[l];
		nums[l] = nums[r];
		nums[r] = t;
	};
	k %= nums.length;

	let n = nums.length;

	{ // Right rotation
		r(0, n - 1);
		r(0, k - 1);
		r(k, n - 1);
	}

  { // Reft rotation
    // rotate(0, k-1);
    // rotate(k, n-1);
    // rotate(0, n-1);
  }
};

var rotateWithSpace = (nums, k) => {
	let temp = new Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		const idx = (i + k) % nums.length;
		temp[idx] = nums[i];
	}
	for (let i = 0; i < nums.length; i++) {
		nums[i] = temp[i];
	}
};

let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);
