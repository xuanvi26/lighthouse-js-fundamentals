/*
const condSum = (values, condition) => {

    let check = 0;
    let sum = 0;
    if (condition === "odd") check = 1;

    values.forEach(elem) => {
        if(elem % 2 === check) sum += elem;
    }

    return sum; 

}
*/


var condSum = function(values, condition) {
    // Your code here
    let check = 0;
    let sum = 0;
    if(condition === 'odd') check = 1;

    values.forEach(elem => {
        if(elem % 2 === check) sum += elem;
    })

    return sum;
  }; 
  
  console.log(condSum([1, 2, 3, 4, 5], "even"));
  console.log(condSum([1, 2, 3, 4, 5], "odd"));
  console.log(condSum([13, 88, 12, 44, 99], "even"));
  console.log(condSum([], "odd"));

(val => {
    console.log(val)
}) ('TEST')