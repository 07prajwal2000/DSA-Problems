/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prevSum = [];
  let prev = 0;
  nums.forEach((x, i) => {
      prev += x;
      this.prevSum.push(prev);
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
  return r - l;
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/