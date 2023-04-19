var RandomizedSet = function() {
  this.map = new Map();
  this.count = 0;
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  this.map.set(val, val);
  this.count++;
  this.arr.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  this.map.delete(val);
  this.count--;
  this.arr = this.arr.filter(x => x !== val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randIndex = rand(0, this.count);
  return this.arr[randIndex];
};

const rand = (min, max) => {
  return parseInt(Math.random() * (max - min));
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const set = new RandomizedSet();
console.log(set.remove(0));
console.log(set.remove(0));
console.log(set.insert(0));
console.log(set.getRandom());
console.log(set.remove(0));
console.log(set.insert(0));