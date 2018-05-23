const loopy = ({min, max, condition1, condition2, word1, word2}) => {
    for (let i=min; i <= max; i++) {
        if (i%condition1 === 0 && i%condition2 === 0) {
            console.log(`${word1}${word2}`); 
       } 
        else if (!(i%condition1)) console.log(word1);
        else if (!(i%condition2)) console.log(word2)
        console.log(i);
    }
}

let input = {
    min: 10,
    max: 90,
    condition1: 2,
    condition2: 5,
    word1: "batty",
    word2: "beacon"
}

loopy(input)

