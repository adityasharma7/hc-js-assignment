// Implement a simple code to use a Promise
"use strict";

function getInfo(customer) {
    let customer = { name: "piyush", age: 45 }
    return new Promise(function(resolve, reject) {


        if (customer.age > 18) {
            resolve();

        } else {
            reject();
        }

    });
}

getInfo().then(function() {
    console.log("customer is eligible")
}).catch(function(error) {
    console.log(" customer is not eigible")
})