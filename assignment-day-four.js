// Q. 1 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const checkNum = 10;
console.log(typeof(checkNum) === checkNum);

const checkVal = parseInt(typeof(checkNum));
console.log(typeof(checkVal) === checkNum);

if (typeof checkNum === 'number' && !isNaN(checkVal))
{
    console.log(checkVal);
}
else
{
    console.log(checkNum);
}

// Q. 2 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

const checkDecima = parseFloat('9.8');
const checkBal = 10;

console.log(typeof(checkDecima) === typeof(checkBal));

//Q. 3 Generate a random number between 0 and 100 inclusively.

// Returns a random integer from 0 to 100:
//method 1
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(0, 100);

//method 2
console.log(Math.floor(Math.random() * 101));// logic for 101 already added in function 1

//Q.4 Generate a random number between 50 and 100 inclusively.
//using the above function

getRandomInt(50, 100);

console.log(Math.floor(Math.random() * 51) + 50)// as used in function 1

/* Q. 5 Use console.log() and escape characters to print the following pattern. 
1 1 1 1 1 2 1 2 4 8 3 1 3 9 27 4 1 4 16 64 5 1 5 25 125*/

console.log(" 1 \t 1 \t 1 \t 1 \t 1 \n\n 2 \t 1 \t 2 \t 4 \t 8 \n\n 3 \t 1 \t 3 \t 9 \t 27 \n\n 4 \t 1 \t 4 \t 16 \t 64 \n\n 5 \t 1 \t 5 \t 25 \t 125");

// Q6 Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function triangleArea(base, hypotenuse) {
    // formula of right angled traingle
    const s = 0.5 * base * hypotenuse;    
    // just return the area
    return s;
    }
    
    // Example usage
    const baseLength = 3;
    const hypotenuseLength = 4;
    const area = triangleArea(baseLength, hypotenuseLength);
    console.log(`The area of the triangle is: ${area}`);
    














