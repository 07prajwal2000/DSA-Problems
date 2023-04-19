var subsets = (s) => {
  const arr = [];
  f(s, '', arr);
  return arr;
};

var f = (s, cur, arr, i = 0) => {
  if (i == s.length) {
    arr.push(cur);
    return;
  }
  f(s, cur, arr, i+1);
  f(s, cur + s[i], arr, i+1);
};

console.log(subsets("ab"));
/* Recursion tree
      ''
  ''      a
''  b   a   ab
*/