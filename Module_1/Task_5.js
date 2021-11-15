const Prime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const Dup = (arr) => {
  var unique = [...new Set(arr)];
  console.log(unique);
};

var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

var flag = true;
var miniFlag = false;
for (var i = 0; i < arr.length; i++) {
  if (Prime(arr[i])) {
    miniFlag = true;
  } else flag = false;
}
if (flag) console.log("Full List is Prime");
if (miniFlag && !flag)
  console.log("One or more items are Prime but Whole list is not Prime ");

Dup(arr);
