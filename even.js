
//Anotehr way to do this is with an arrow function
// const isEven(num) => {
//    return num % 2 === 0;
// }
function isEven(num) {
    return num % 2 === 0;
}

console.log(10 % 2 === 0);
11 % 2 === 0;

console.log(isEven(10));
// Avoid using var, it is outdated now
// Look up let and const
var elevenIsEven = isEven(11);

console.log(elevenIsEven);
