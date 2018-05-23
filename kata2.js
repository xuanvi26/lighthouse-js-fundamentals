var conditionalSum = function(values, condition) {
    // Your code here
    let check = 0;
    let sum = 0;
    if(condition === 'odd') check = 1;

    values.forEach(elem => {
        if(elem % 2 === check) sum += elem;
    })

    return sum;
  };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));