function ageCalculator (name, yearOfBirth, currentYear) {
    const age = currentYear - yearOfBirth;
    return "\"" + name + " is " + age + " years old.\"";
}

console.log(ageCalculator("Jerry", 1991, 2018));