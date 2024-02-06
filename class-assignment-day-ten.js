//date : 6th feb, 2024

//what is parsing ?

//Try to explain double shorts operator?

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



