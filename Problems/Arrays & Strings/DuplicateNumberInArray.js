/**
 * Similar to Detect Linkedlist Cycle
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	let slow = nums[0];
	let fast = nums[0];
	do {
		slow = nums[slow];
		fast = nums[nums[fast]];
	} while (slow != fast);

	fast = nums[0];
	while (slow != fast) {
		slow = nums[slow];
		fast = nums[fast];
	}
	return slow;
};

// Uses O(n) - Extra space
var solution2 = (nums) => {
  const set = new Set();
  for (let n of nums) {
    if (set.has(n)) return n;
    set.add(n);
  }
};