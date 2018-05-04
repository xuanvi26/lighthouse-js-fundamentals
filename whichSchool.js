const whichSchool = (age) => {
    if (age < 13) {
        return "Elementary school";
    } 
    if (age <= 18) {
        return "Secondary school";
    } 
    else {
        return "Lighthouse labs";
    }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));