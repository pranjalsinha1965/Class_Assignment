
// Day-3 Assignment
// Create a file and declare variables and assign string, boolean, undefined and null data types
// Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

//Declared variables using string, boolean, undefined and null data types

const FirstName = "Pranjal";
const LastName = "Sinha";
const AreaName = "WadgaonSheri";

console.log(FirstName + LastName + " " +AreaName);

const isloggedin = true;
const isloggedoff = false;

// console.log(typeof isloggedin);
// console.log(typeof isloggedoff);


const user = {
    name: "Alice",
    age: 30, 
    occupation: null
};
console.log(user.occupation + "unemployed");
console.log(null === undefined); // difference in between null and undefined


const arrayUndefined = new Array(3);
console.log(undefined === null); // difference in between undefined and null
console.log(arrayUndefined);
