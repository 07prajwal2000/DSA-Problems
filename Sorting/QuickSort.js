/**
 * Quick Sort
 * @param {number[]} arr 
 * @param {number} low 
 * @param {number} high 
 */
var quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (high <= low) return;

  let pivot = arr[low];
  let i = low, j = high;
  while (i <= j) {
    while (i <= j && arr[i] <= pivot) {
      i++;
    }
    while (i <= j && arr[j] >= pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);
  quickSort(arr, low, j - 1);
  quickSort(arr, j + 1, high);
};

var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [];
for (let i = 0; i < 10_000; i++) {
  arr.push(parseInt(Math.random() * 100_000));
}
quickSort(arr);
console.log(arr);