// Day - 9 Assignment on 5th February

// 1. Check if type of '70' is equal to 70
console.log('70' === 70);

// 2. Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') == 9);

// 3. Boolean value is either true or false.
// (a). Write five JavaScript statement which provide falsy value.
const varNoParam = new Boolean();
console.log(varNoParam);

const varZero = new Boolean(0);
console.log(varZero);

const varNull = new Boolean(null);
console.log(varNull);

const varEmptyString = new Boolean("");
console.log(varEmptyString);

const varFalse = new Boolean(false);
console.log(varFalse);

const varNaN = new Boolean(NaN);
console.log(varNaN);

// (b). Write five JavaScript statement which provide truthy  value.
const varString = new Boolean('0');
console.log(varString);

const varText = new Boolean('truthy');
console.log(varText);

const varArray = new Boolean([]);
console.log(varArray);

const varObject = new Boolean({});
console.log(varObject);

const varFunction = new Boolean(function(){});
console.log(varFunction);

// 4. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// (a).5 > 4
//Answer True, correct statement
console.log(5 > 4);

// (b).4 >= 3
//Answer true, correct statement
console.log(4 >= 3);

// (c).4 < 3
//Answer false, incorrect statement
console.log(4 < 3);

// (d).4 <= 3
//Answer false
console.log(4 <= 3);

// (e).5 == 5
//Answer true, correct statement
console.log(5 == 5);

// (f).9 === 9
//Answer true, as type is number only
console.log(9 === 9);

// (g).9 == '9'
//Answer true, since value remains constant
console.log(9 == '9');

// (h).8 === '8'
//Answer true, type remains the same
console.log(8 == '8');

// (i).4 != 4
//Answer false, as 4 = 4
console.log(4 != 4);

// (j).4 !== 4
//Answer false, type is same only 
console.log(4 !== 4)

// (k).4 != '4'
//Answer false, value is same only 
console.log(4 != '4');

// (l)4 != '4'
//Answer false, value is same only 
console.log(4 != '4');

// (m).4 !== '4'
//Answer false, type is same only 
console.log(4 !== 4);

// (n.)Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length > 'jargon'.length)

// 5. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// (a).4 > 3 && 10 < 12
const checkOptionA = 4 > 3 && 10 < 12;         // true && true -> true
console.log(checkOptionA);

// (b).4 > 3 && 10 > 12
const checkOptionB = 4 > 3 && 10 > 12          // true && false -> false
console.log(checkOptionB);

// (c).4 > 3 || 10 < 12
const checkOptionC = 4 > 3 || 10 < 12;         //true || false -> true
console.log(checkOptionC);

// (d).4 > 3 || 10 > 12                  //true || false -> true
const checkOptionD = 4 > 3 || 10 < 12;
console.log(checkOptionD);

// (e).!(4 > 3)
const checkOptionE = !(4 > 3);                //!(true) -> flase
console.log(checkOptionE);

// (f).!(4 < 3)
const checkOptionF = !(4 < 3);                //!(false) -> true
console.log(checkOptionF);

// (g).!(false)
const checkOptionG = !(false);                //!(false) -> true
console.log(checkOptionG);

// (h).!(4 > 3 && 10 < 12)
const checkOptionH = !(4 > 3 && 10 < 12);     //!(4 > 3 && 10 < 12) -> !(true && true) -> !(true) -> false
console.log(checkOptionH);

// (i).!(4 > 3 && 10 > 12)
const checkOptionI = !(4 > 3 && 10 > 12);     //!(4 > 3 && 10 > 12) -> !(true && false) -> !(false) -> true
console.log(checkOptionI);

// (j).!(4 === '4')
const checkOptionJ = !(4 === '4');            //!(4 === '4') -> !(false) -> true
console.log(checkOptionJ);

// (k).There is no 'on' in both dragon and python
// console.log('python'.length > 'dragon'.length)

// Case I: if on is checked in "dragon and python"
const text = "dragon and python";

const bothNoOn = !/(?=(dragon|python))\bon/.test(text);
console.log("'on' is not present in both dragon and jargon:", bothNoOn); //output should be false

// case II: if on is checked individually in python and jargon
const firstString = "dragon";
const secondString = "python";
const bothNoOnFunctwo = !("on" == firstString) && !("on" == secondString);
console.log("'on' is not present in both dragon and python:", bothNoOnFunctwo);
// DEADLINE: EOD