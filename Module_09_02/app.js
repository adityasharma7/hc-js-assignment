const findProducts = async () => {
  const url = "https://fakestoreapi.com/products";

  const list = await fetch(url).then((res) => res.json());
  const promiseList = [];
  list.forEach((product) => {
    const newUrl = url + "/" + product.id;
    promiseList.push(fetch(newUrl).then((product) => product.json()));
  });
  var promiseResult = new Array();

  const values = await Promise.all(promiseList).then((prom) => prom);

  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    const div = document.getElementsByTagName("div")[0];
    div.append(li);
    li.innerText = values[i].title;
    console.log(values[i]);
  }
};
