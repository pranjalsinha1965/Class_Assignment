// let accountId;
// console.log(typeof accountId);

// 1st February, 2024

//number datatypes
//conversion from string to number
//try to learn NaN and examples of it`s
//some important methods
//try to explore undefined not defined on your own 

const myNum = '33abc'
parseInt(myNum);

console.log(typeof myNum);
console.log(typeof myInt);

//isNaN method for differentiating in between type of number and strings 

const myNumber = "33ab"
console.log(typeof(myNumber));
console.log(isNaN(myNumber));

//isNaN tries to explicitly pass a number 
//isfinite method also

const myRoll = 123;
console.log(isFinite(myRoll));

// console.log(typeof(myTime));

// const myTime = BigInt(300000000000789n);
// console.log(isFinite(myTime));

//isInteger

const myVal = 334455;
// console.log(isInteger(myVal));
console.log(myVal.isInteger);

const checkNum = 12345.3456;
const checkNumDecimal = 12345.7;
console.log(checkNum.toFixed());
console.log(checkNum.toFixed());

const checkVal = checkNum.toFixed();
console.log(checkVal);

const numOne = 15;
const numTwo = 5;

console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);
console.log(numOne / numTwo);
console.log(numOne % numTwo);

console.log(Math);
console.log(numOne);

// ceil nearest below integer
// floor nearest above intege
// const valDecimal = 4.5;
// console.log(round.valDecimal);

//Q.1 try to return the floor or ceil of a number in between 1 to 10 

function getRandomOneToTen(max) {
    return Math.floor(Math.random() * 10);
  }
  
getRandomOneToTen();
console.log(getRandomOneToTen());

let add = 10 + 'abcd';
add = true + true
add = true + 'abcd'

console.log(add);
console.log(typeof(NaN));

num1 = 1 / 0;
console.log(num1);
console.log(typeof(num1));
const user = new Array(3);
console.log(user);

















