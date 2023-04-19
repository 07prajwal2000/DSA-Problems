var getDivisors = (n) => {
  let divisors = [];
  let i = 1;
  for (; i * i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }

  while (i >= 1) {
    if (n % i == 0) {
      divisors.push(n / i);
    }
    i--;
  }

  return divisors;
};

console.log(getDivisors(20));