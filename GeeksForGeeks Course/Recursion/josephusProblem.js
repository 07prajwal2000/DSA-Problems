var jos = (n, k) => { // TC - O(n) , SC = O(n) auxillary stack space
  return f(n, k) + 1; // for 1 based index, if o based it will be 0
};

var f = (n, k) => {
  if (n == 1) {
    return 0;
  }

  return (f(n - 1, k) + k) % n; // used modulo bcz the sum go more than n, 
};

console.log(jos(5, 3));

console.log(jos(3, 2));
/*
    1 <- Gun
  3   2 - Killed
  ___
    1 - Killed
    3 <- Gun
  ___
    3 - Gun
*/