//simple code to use promise
new Promise((resolve, reject) => {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const c = a + b;
    c % 2 == 0 ? resolve(c) : reject(c);
}).then((result) => console.log("even", result)).catch((result) => console.log("odd", result));