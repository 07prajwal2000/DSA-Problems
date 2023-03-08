/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const map = {};
  for (let num of nums) {
      if (map[num]) {
          map[num]++;
      } else {
          map[num] = 1;
      }
  }
  const ans = [];
  const count = Array(nums.length + 1);

  for (let m in map) {
      if (count[map[m]]) {
          count[map[m]].push(m);
      } else {
          count[map[m]] = [m];
      }
  }

  for (let i = count.length - 1; i >= 0; i--) {
      if (!count[i]) continue;
      for (let num of count[i]) {
          ans.push(parseInt(num));
          if (ans.length === k) {
              return ans;
          }
      }
  }
  
  return [];
};

console.log(topKFrequent([1,1,1,2,2,3], 2));