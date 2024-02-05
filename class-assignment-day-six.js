//5th February, 2024
//Booleans

//some logical operators : and (true, false), or (true, false), not (true, false), XOR(duplicate, unique elements)
// truthy and falsy values: null, undefined, NaN, blank string, 0`s
// revise undefined and null values given for an array
//comparing two empty arrays will result in false because of addresses and references to variable declarations
//used for defining functions and conditions in a block

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(0 || false);
console.log(1 || true);

// comparision operators
// difference in between ==(values) and ===(types)

console.log(5 < 5);
console.log(5 <= 5);
console.log(5 < "a");
console.log("a" < 5);
console.log(5 < "");
console.log(5 == "5");
console.log(9 != "9");
console.log(9 !== "9");
console.log([]===[]);

const a = NaN;
const b = NaN;
console.log(a == b);
console.log(a === b);

//assignment how to compare arrays and objects
console.log(!"true" == !"false");//also provide a usecase for this type of condition

//Build a simple authentication system. Users can access a secret page only if they meet the following criteria:

// They must be logged in.
// They must be at least 18 years old.
// Their account must not be suspended.

const isLoggedIn = true;
const userAge = 20;
const userAccount = "not suspended";

const userLink = "https://github.com/pranjalsinha-coditas/Class_Assignment";

function Question() {
    if(isLoggedIn === true && userAge > 18 && userAccount === "not suspended")
{
    console.log("Your required web page is https://github.com/pranjalsinha-coditas/Class_Assignment");
}
else
{
    console.log("Not Allowed");
}
}

Question();






