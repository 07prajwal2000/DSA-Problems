var getLeaders = (arr) => {
  let n = arr.length;
  let leaders = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = n-1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
      leaders.push(max);
    }
  }
  return leaders = leaders.reverse();
};

console.log(getLeaders([7, 10, 1, 2, 6, 5, 2]));