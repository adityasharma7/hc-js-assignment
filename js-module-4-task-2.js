//Implement regular expression for name with letters

const names = "Samkit Prashant Ravindra";
const regexp = /s/i; //regular expression

const find = names.search(regexp);
const result = regexp.test(names);

console.log(names[find]);
result ? console.log(`the name  with the letter 'S'  exists at  ${find}th index`) : console.log("the name  with the letter 'S' doesn't exist");