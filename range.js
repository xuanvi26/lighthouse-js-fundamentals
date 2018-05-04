const range = (start, end, step) => {
    let values = [];
    if (start === undefined|| end === undefined || step === undefined) return values;
    if (start > end) return values;
    if (step <= 0) return values;
    for (i = start; i <= end; i += step) {
        values.push(i);
    }
    return (values);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));