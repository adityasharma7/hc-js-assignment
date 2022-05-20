var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// even

// var x= a.filter((item)=>item%2==0)

// console.log(x)

// var x= a.filter((item)=>item%2!==0)

// console.log(x)

var x = a.filter((item) => {
  let c = 0;
  for (let i = 1; i <= item; i++) {
    if (item % i !== 0) {
      c++;
    }
  }
  if (item <= 2) {
    return true;
  } else {
    if (c > 2) {
      return true;
    } else {
      return false;
    }
  }
});

console.log(x);
