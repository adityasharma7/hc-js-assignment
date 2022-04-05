"use strict";
// 2. Implement regular expression for name with letters

const str = "mayank Prashant vivek";
let regexp = /p/i;

let findat = str.search(regexp);
const result = regexp.test(str);

console.log(str[findat]);
result ? console.log(`the name exists with the letter 'P' at  ${findat}th index`) : console.log("the name doesn't exist with the letter 'P'");