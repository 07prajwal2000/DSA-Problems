var sum = (n) => {
  
  let s = 0;
  while (n > 0) {
    s += n % 10;
    n = parseInt(n / 10);
  }

  return s;
  
  if (n <= 1) {
    return n;
  }
  return n % 10 + sum(parseInt(n / 10));
};

console.log(sum(222));