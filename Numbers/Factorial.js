function fact(n) {
  let sum = 1;
  while (n) {
    sum *= n;
    n--;
  }
  return sum;
}

function factRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factRecursion(n-1);
}

console.log(factRecursion(20));