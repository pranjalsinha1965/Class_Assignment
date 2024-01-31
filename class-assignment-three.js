//Question-1
//Eg. 1
const user = {
    name: "Alice",
    age: 30, 
    occupation: null
};
console.log(user.occupation + "unemployed");

//Eg. 2
const liquid = {
    water: null // in case it`s not 0
}
console.log(liquid.water);
 
// Null in javascript is a primitive data-type which can also be a standalone value.
// It can also be representation of an empty value. It is slightly different from undefined
//Proof
console.log(null === undefined);
/* Null is used in case of temperatures also */

//Eg. 3

const arrayUndefined = new Array(3);
//undefined is used in case of uninitialized variables or if value is not assigned to the variable 
//It`s different from null 
//Proof
console.log(undefined === null);
console.log(arrayUndefined);

//Eg. 4
let myName;
console.log(myName);
console.log(typeof myName);

//Question-2
//Examples of non-primitive datatypes are Strings, Arrays, Classes, Interface
//These can also include null values
//These deal with objects

//Eg. 5
const greeting = "Hello";
const cars = [
    "Volvo",
    "BMW",
    "Mercedes"
]
console.log(greeting);
console.log(cars);

//Examples of collections in javascript are Arrays, Maps and Collections
//They are implemented using both arrays and objects

//Eg. 6
const Assignment = new Map([
    ['day', 'two'], 
    ['type', 'day-assignment'], 
    ['subject', 'JavaScript']
]);

//Question - 3
//Console always returns console object for window whereas log method is used for writing a message to the console.
//Syntax
// console.log(message);

//while writing message and using objects
const myObj = {
    firstname: "Pranjal", 
    latsname: "Sinha"
};
console.log(myObj);

//while writing message and using arrays
const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
console.log(myArr);

//Also supported in browsers including Google, internet explorer, Edge, Safari, opera

//Question - 4
//NaN - not a number
// when you perform Arithmetic Operations with string and number it returns Nan
console.log(5 * 'A');
console.log(5 - 'A');
console.log(5 / 'A');
console.log(5 / 'a');

console.log(typeof NaN);



























