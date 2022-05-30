function sum(...nums) {
  if (nums.length === 0) {
    return 0;
  }
  function add(nums, i) {
    if (i === nums.length - 1) {
      return nums[i];
    }
    return nums[i] + add(nums, i + 1);
  }
  return add(nums, 0);
}

var x = sum(1,2,3,4,6,7,8);
console.log(x);
