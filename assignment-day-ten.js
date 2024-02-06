// 1. If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.

function driversAge()
{
const userAge = 20;
if (userAge > 18) {
    console.log("You are allowed to Marry !!");
} 
else 
{
    console.log(`you need to wait for ${18-userAge} year(s) before marriage !!`);
}
}
console.log(driversAge());


// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.

function compareAge()
{
const myAge = 21;
const yourAge = 26;
if (myAge> yourAge) {
    console.log("i'm older than you with ${age - yourAge}")
} else {
    console.log(`you are ${yourAge - myAge} years older than me`)
}
}
console.log(compareAge());

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. 
// Try to implement it in to ways.

// method one

function compareMyAndyourAge()
{
    const myCurrentAge = 21;
    const yourCurrentAge = 26;
    if(myCurrentAge > yourCurrentAge)
    {
        console.log("YourAge is greater than myAge !!");
    }
    else
    {
        console.log("myAge is less than yourAge");
    }
}
console.log(compareMyAndyourAge());

//using ternary operators
const myAge = 30;
const yourAge = 31;
myAge > yourAge ? console.log("yourAge is greater than myAge") : console.log("myAge is less than yourAge");

// 4. Check, if a number is even or not.
const takeAnyNumber = 21;
takeAnyNumber % 2 == 0 ? console.log("The given number is even") : console.log("The given number is odd !!");

//5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//using if else

const myScore = 91;

if(myScore >= 0 && myScore <= 49)
{
    console.log("F");
} else if(myScore >= 50 && myScore <= 59)
{
    console.log("E");
} else if(myScore >= 60 && myScore <= 69)
{
    console.log("D");
} else if(myScore >= 70 && myScore <= 79)
{
    console.log("C");
} else if(myScore >= 80 && myScore <= 89)
{
    console.log("B");
}
else if(myScore >= 90 && myScore <= 99)
{
    console.log("A");
}
else
{
    console.log("invalid score");
}

//Alternate method: using ternary switch case

const score = 91;
switch (true) {
    case score > 80:
        console.log("A");
        break;
    case score > 70:
        console.log("B");
        break;
    case score > 60:
        console.log("C");
        break;
    case score > 50:
        console.log("D");
        break;
    case (score < 50):
        console.log("F");
        break;
    default:
        console.log("no score assigned")
}

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const myMonth = 'April';
switch (myMonth) {
    case "September":
    case "October":
    case "November":
        console.log("the season is Rainy");
        break;
    case "December":
    case "January":
    case "Febuary":
        console.log("the season is Winter");
        break;
    case "March":
        console.log("the season is Spring");
        break;
    case "April":
    case "May":
    case "June":
    case "July":
    case "August":
        console.log("the season is Summer");
        break;
    default:
        console.log("invalid Month")
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.

const enteredDay = "Monday";
if(enteredDay == "Sunday" || enteredDay == "Saturday")
{
    console.log("Your day is weekend !!");
}
else if(enteredDay == "Monday" || enteredDay == "Tuesday" || enteredDay == "Wednesday" || enteredDay == "Thursday" || enteredDay == "Friday")
{
    console.log("Your day is a working day !!");
}
else 
{
    console.log("Invalid entry");
}

// 8. Write a program which tells the number of days in a month.

const yourMonth = "January";

switch (yourMonth) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`There are 31 days in ${yourMonth}`);
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`There are 30 days in ${yourMonth}`);
        break;
    case "Febuary":
        console.log(`There are 28 days in ${yourMonth}`);
        break;
    default:
        console.log("Invalid Entry");
}

// 9. Write a program to check whether the year is leap year or not.

function isLeapYear(givenYear) {
	if (givenYear % 100 === 0 ? givenYear % 400 === 0 : givenYear % 4 === 0)
    {
		console.log("Year", givenYear, "is a leap year !!");
    	}	else{
		console.log("Year", givenYear, "is not a leap year !!");
        }
}

const inputYear = 2020;
isLeapYear(inputYear);

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
    
//method one
myAge >= 18 ? myAge >= 31 ? console.log('A') : console.log('B'): myAge >= 30 ? console.log('C'): console.log('D');
 
//method two
let myAgeOne = 12;
myAge >= 18
? console.log('A') : console.log('B');
myAge >=30
? console.log('C') : console.log('D');

// 11. What will be the result of the following nested ternary expression:

let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result);

//result is D




