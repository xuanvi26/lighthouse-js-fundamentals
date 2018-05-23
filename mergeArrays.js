const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const sort = (unsortedArr) => {
    let sortedArr = unsortedArr.sort(function(a, b) {return a-b});
    return sortedArr;
}

const mergeSort = (arr1, arr2) => {
    let unsortedArr = concat(arr1, arr2);
    return sort(unsortedArr);
}
    
console.log(mergeSort([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(mergeSort([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(mergeSort([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);