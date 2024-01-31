
// Day-3 Assignment
// Create a file and declare variables and assign string, boolean, undefined and null data types
// Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// File1 - Question_1
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

// File2 - Question-2

const temperature = null;
console.log(typeof temperature);

const TotalSquares = Math.sqrt(4);
console.log(typeof TotalSquares);

const ActiveState = true;
console.log(typeof ActiveState);

const mySite = "HarvardCS50";
console.log(typeof mySite);

const large_num = BigInt('1000000000000000000000007');
console.log(typeof large_num);

const sym = Symbol('Theta');
console.log(typeof sym);

function hi()
{
    const name = "John Shelby";
    if(name === null)
    {
        console.log(typeof name);
    }
}
hi();

console.log(typeof hi);

const objNull = null;
console.log(typeof objNull);

const remainder = undefined //incase of 0 divided by infinity
console.log(typeof remainder);





