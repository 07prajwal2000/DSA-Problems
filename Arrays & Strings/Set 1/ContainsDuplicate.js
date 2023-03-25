function containsDuplicate(nums) {
  const ele = [];
  let flag = false;
  nums.forEach(x => {
      if (ele.includes(x)) flag = true;
      ele.push(x);
  });
  return flag;
};