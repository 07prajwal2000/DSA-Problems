/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	const arr = Array();
	let l = 0,
		r = 0;
	while (l < nums1.length) {
    while (l === m && r < nums2.length) {
      arr.push(nums2[r]);
			r++;
		}
    if (l === m && r === n) break;
    const n1 = nums1[l];
    const n2 = nums2[r];
		if (n1 > n2) {
			arr.push(n2);
			r++;
		} else {
			arr.push(n1);
			l++;
		}
	}
	arr.forEach((x, i) => {
		nums1[i] = x;
	});
};
const input = [2, 0];
merge(input, 1, [1], 1);
console.log(input);
