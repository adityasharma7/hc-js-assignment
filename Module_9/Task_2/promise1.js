// Implement code to handle multiple promises.You have to fetch information of 5 different products from API


"use strict";

async function init() {

    const result = await Promise.allSettled([
        fetch("https://fakestoreapi.com/prod").then((response) => response.json()),
        fetch("https://fakestoreapi.com/products/2").then((response) => response.json()),
        fetch("https://fakestoreapi.com/products/3").then((response) => response.json()),
        fetch("https://fakestoreapi.com/products/4").then((response) => response.json()),
        fetch("https://fakestoreapi.com/products/5").then((response) => response.json())
    ]);
    console.log(result)

}
init();