/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  this.prevSum = [];
  let prev = nums[i-1] || 0;
  nums.forEach((x, i) => {
      this.prevSum.push(prev + x);
  });
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  let l = this.prevSum[left-1] || 0;
  let r = this.prevSum[right];
  return l + r;
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/