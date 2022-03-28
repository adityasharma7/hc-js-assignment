// 2. Implement code to handle multiple promises. You have to fetch information of 5 different products from API

let product1 = fetch('https://fakestoreapi.com/products/1');
let product2 = fetch('https://fakestoreapi.com/products/2');
let product3 = fetch('https://fakestoreapi.com/products/3');
let product4 = fetch('https://fakestoreapi.com/products/4');
let product5 = fetch('https://fakestoreapi.com/products/5');

Promise.all([product1, product2, product3, product4, product5]).then((dataFetched) => {
    return Promise.all(dataFetched.map((product) => product.json()))
}).then((dataParsed) => console.log(dataParsed));