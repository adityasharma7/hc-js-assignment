var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
function remDuplicate(arr) {
  let acc = [];
  arr.forEach((e) => {
    if (!acc.includes(e)) {
      acc.push(e);
    }
  });
  return acc;
}

console.log(remDuplicate(arr));
