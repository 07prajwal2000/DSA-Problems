var MyHashMap = function () {
	this.arr = Array(1000);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const mod = key % 1000;
  if (this.arr[mod]) {
    let flag = false;
    this.arr[mod].forEach((x, i) => {
      if (x[0] === key) {
        this.arr[mod][i] = [key, value];
        flag = true;
        return;
      };
    });
    if (!flag) {
      this.arr[mod].push([key, value]);
    }
  } else {
    this.arr[mod] = [[key, value]];
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const mod = key % 1000;
  if (!this.arr[mod] || this.arr[mod].length === 0) {
    return -1;
  }
  const val = this.arr[mod].filter(x => x[0] === key);
  if (val.length === 0) return -1;
  return val[0][1];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const mod = key % 1000;
  if (!this.arr[mod] || this.arr[mod].length === 0) {
    return;
  }
  const vals = this.arr[mod].filter(x => x[0] !== key);
  this.arr[mod] = vals;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hmap = new MyHashMap();

ins.forEach((x, i) => {
  const value = vals[i];
  if (x === 'remove') {
    hmap.remove(value[0]);
  } else if (x === 'put') {
    hmap.put(value[0], value[1]);
  } else {
    hmap.get(value[0]);
  }
});