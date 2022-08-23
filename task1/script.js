const returnRandom = () => {
  return Math.floor(Math.random() * 10);
};

const promise = new Promise((resolve, reject) => {
  const random = returnRandom();
  if (random != 9) {
    resolve("Not 9, yay!");
  } else {
    reject("It's 9!");
  }
})
  .then((successMsg) => {
    console.log(`Success. ${successMsg}`);
  })
  .catch((errorMsg) => {
    console.log(`Error. ${errorMsg}`);
  });
