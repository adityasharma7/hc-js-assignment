// 1. Implement a simple code to use a Promise

let sum = new Promise((resolve, reject) => {
    let x = 5;
    let y = 5;
    let z = x + y;
    if (z === 10) {
        resolve(z);
    } else {
        reject(z);
    }
}).then((result) => {
    console.log("promise was resolved with result: " + result);
}).catch((error) => {
    console.log("promise was rejected with error: " + error);
})