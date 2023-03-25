
var Queue = function () {
  this.array = [];
  this.length = this.array.length;
};

Queue.prototype.enqueue = function (ele) {
  this.array.push(ele);
};

Queue.prototype.any = function () {
  return this.array.length > 0;
};

Queue.prototype.dequeue = function () {
  if (this.any()) {
    const ele = this.array[0];
    this.array = this.array.filter(x => x !== this.array[0]);
    return ele;
  }
  return null;
};
Queue.prototype.peek = function () {
  if (this.any()) {
    const ele = this.array[0];
    return ele;
  }
  return null;
};
