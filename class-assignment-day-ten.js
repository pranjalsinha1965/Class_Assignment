//date : 6th feb, 2024

// very important tool for javascript loops
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

//what is parsing ?
/* Ans. Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, 
    for example the JavaScript engine inside browsers. 
    The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. */

//Try to explain double shorts operator?
/* 
What it does is remove everything after the decimal point. Think of it as a way to round a number. 
Under the hood what is happening is that we are applying the single tilde operator twice. 
So actually, there is no real double tilde operator 😆
*/

console.log(!!'false');                //!!(string)->!(false)->true
console.log(undefined == false);       

//                 conditionals 
//                 /    |    \
//            ifelse ternary Switch Case

// function using nested if condition

function myAccount(){
    const myUser = {
        userLoggedIn : true,
        accountStatus : 'suspended',
        userAge : 30
    };
if(myUser.userLoggedIn == true)
{
    if(myUser.userAge > 18)
    {
        console.log("UserLogin Successful");

        if(myUser.accountStatus != 'Not suspended')
        {
            console.log("Cannot login !!");
        }
    }
    else
    {
        console.log("Cannot login !!");
    }
}
else 
{
    console.log("Cannot login !!");
}
}
console.log(myAccount());

//ternary conditions

function myAccount2(){
    const myUser = {
        userLoggedIn : true,
        accountStatus : 'not suspended',
        userAge : 30
    };
    if(myUser.userLoggedIn != true && myUser.accountStatus != 'not suspended' && myUser.userAge < 18){
    console.log("Cannot Login");
}
else
{
    console.log("Successful user login");
}
}
console.log(myAccount2());



