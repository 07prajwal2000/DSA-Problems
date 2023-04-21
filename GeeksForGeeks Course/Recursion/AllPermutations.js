var permutation = (s, arr, i = 0) => {
  if (s.length == i+1) {
    arr.push(s);
    return;
  }
  var swap = (ar, i, j) => {
    let t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  };
  for (let j = i; j < s.length; j++) {
    let ar = s.split('');
    swap(ar, i, j);
    permutation(ar.join(''), arr, i + 1);
    swap(ar, j, i);
  }
};

const arr = [];
permutation("abcd", arr);
console.log(arr);