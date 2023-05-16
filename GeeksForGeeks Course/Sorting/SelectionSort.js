/**
 * O(n^2)
 * @param {number[]} arr
 */
var sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
  return arr;
};
var swap = (arr, l, r) => {
  let t = arr[l];
  arr[l] = arr[r];
  arr[r] = t;
}
console.log(sort([1, 2, 6, 4, 5, 7, 8, 3, 2, 44, 66, 74, 22, 34, 98, 12, 34]));