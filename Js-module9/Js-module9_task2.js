"use strict";
// 2. Implement code to handle multiple promises. You have to fetch information of 5 different products from API
async function getusersdata() {
    for (let x = 1; x <= 5; x++) {
        await fetch(`https://fakestoreapi.com/products/${x}`)
            .then(res => res.json())
            .then(element => {
                console.log("fetch", element);
                (function() {
                    let head = document.createElement('h2');
                    head.innerHTML = "Id: " + element.id + "<br>Product Name: " + element.title +
                        "<br>Price: " + element.price + "<br>Category: " + element.category;
                    document.body.appendChild(head);

                    let image = document.createElement('img');
                    image.src = element.image;
                    image.width = "400";
                    image.height = '400';
                    document.body.appendChild(image);
                }());
                // document.getElementById(`response${x}`).innerHTML = "Id: " + element.id + "<br>Product Name: " + element.title +
                //     "<br>Price: " + element.price + "<br>Category: " + element.category;
                // document.getElementById(`img${x}`).src = element.image;
            }).catch(error => console.log(error));
    }
}
getusersdata();