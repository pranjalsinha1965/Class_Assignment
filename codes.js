//2nd February, 2024

//String and it`s methods
//It`s a type of primitive data type which can store a sequence of characters.
//method for converting string to a number

console.log(+"123")
const myName = 'Pranjal';
const myLastName = 'Sinha';
console.log(myName+myLastName);

let greeting  = 'greet' + " " + myName + " " + myLastName;
console.log(greeting);

console.log(`myName variable is: ${myName} myLastName variable is: ${myLastName}`);
const message = 'Hello';

console.log(message.charAt(-2));
console.log(message.charCodeAt(1));

/*very important please study these things*/

let messageNext = "hello";
messageNext[0] = "B";
console.log(messageNext); 

/*still logs of hello, because strings are immutable*/

const messageNext1 = "prs01";
console.log(messageNext1);

console.log("Pranjal Sinha".split());
console.log("pranjal sinha".toLocaleLowerCase());

// what`s the difference in between touppercase and tolocaleuppercase

const mySubject = "Javascript";
console.log(mySubject.slice(2));
console.log(mySubject.substring(4)); 

/* write the different in between to different methods of three strings substr, substring and slice*/

console.log(mySubject.trim(4));
console.log(mySubject.indexOf('J'));






























