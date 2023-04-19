function IsAnagram(s, t) {
  if (s.length !== t.length) return false;
  const s1 = {};
  const s2 = {};

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (s1[key]) {
      s1[key]++;
    } else {
      s1[key] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const key = t[i];
    if (s2[key]) {
      s2[key]++;
    } else {
      s2[key] = 1;
    }
  }
  
  let flag = true;

  Object.keys(s1).forEach(x => {
    if (!s2[x]) {
      flag = false;
      return;
    } else if (s2[x] !== s1[x]) {
      flag = false;
      return;
    }
  });
  

  Object.keys(s2).forEach(x => {
    if (!s1[x]) {
      flag = false;
      return;
    } else if (s2[x] !== s1[x]) {
      flag = false;
      return;
    }
  });

  return flag;
}