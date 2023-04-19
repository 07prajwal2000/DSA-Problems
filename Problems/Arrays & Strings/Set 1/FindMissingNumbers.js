/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbersSlow = function (nums) {
	const set = new Set();
	const n = nums.length;
	let larger = -1;
	for (let i = 0; i < n; i++) {
		const num = nums[i];
		set.add(num);
		if (num > larger) {
			larger = num;
		}
	}
	const ans = [];
	larger = larger > n ? larger : n;
	for (let i = 1; i <= larger; i++) {
		if (!set.has(i)) {
			ans.push(i);
		}
	}
	return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let n of nums) {
    n = Math.abs(n) - 1;
    nums[n] = Math.abs(nums[n]) * -1;
  }
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > 0) {
      ans.push(i + 1);
    }
  }
  return ans;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
