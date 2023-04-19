var primeFactors = (n) => { // O( sqrt(n) )
  let factors = [];
  if (n <= 1) return factors;

  for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
};

// WORST - O( sqrt(n) ) if it wont fall into while loop inside for. 
// AVG - O( lessThan sqrt(n) )
var primeFactorsFast = (n) => { 
  let factors = [];
  if (n <= 1) return factors;

  while (n % 2 == 0) {
    factors.push(2);
    n /= 2;
  }
  while (n % 3 == 0) {
    factors.push(3);
    n /= 3;
  }
  
  for (let i = 5; i * i <= n; i += 6) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
    while (n % (i + 2) == 0) {
      factors.push(i + 2);
      n /= (i + 2);
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
};

console.log(primeFactorsFast(84));