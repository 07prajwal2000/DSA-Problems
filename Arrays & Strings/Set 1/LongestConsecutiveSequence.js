/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let i of set) {
      if (!set.has(i - 1)) {
          let len = 0;
          while (set.has(i + len)) {
              len++;
          }
          longest = Math.max(len, longest);
      }
  }
  return longest;
};