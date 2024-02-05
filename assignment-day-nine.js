// Day - 9 Assignment on 5th February

// 1. Check if type of '70' is equal to 70
console.log('70' === 70);

// 2. Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') == 9);

// 3. Boolean value is either true or false.
// (a). Write five JavaScript statement which provide falsy value.
const bNoParam = new Boolean();
console.log(bNoParam);

const bZero = new Boolean(0);
console.log(bZero);

const bNull = new Boolean(null);
console.log(bNull);

const bEmptyString = new Boolean("");
console.log(bEmptyString);

const bFalse = new Boolean(false);
console.log(bFalse);

const bNaN = new Boolean(NaN);
console.log(bNaN);

// (b). Write five JavaScript statement which provide truthy  value.
const bString = new Boolean('0');
console.log(bString);

const bText = new Boolean('truthy');
console.log(bText);

const bArray = new Boolean([]);
console.log(bArray);

const bObject = new Boolean({});
console.log(bObject);

const bFunction = new Boolean(function(){});
console.log(bFunction);

// 4. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// (a).5 > 4
//Answer True
console.log(5 > 4);

// (b).4 >= 3
//Answer true
console.log(4 >= 3);

// (c).4 < 3
//Answer false
console.log(4 < 3);

// (d).4 <= 3
//Answer false
console.log(4 <= 3);

// (e).5 == 5
//Answer true
console.log(5 == 5);

// (f).9 === 9
//Answer true
console.log(9 == 9);

// (g).9 == '9'
//Answer true
console.log(9 == '9');

// (h).8 === '8'
//Answer true
console.log(8 == '8');

// (i).4 != 4
//Answer false
console.log(4 != 4);

// (j).4 !== 4
//Answer false
console.log(4 !== 4)

// (k).4 != '4'
//Answer false
console.log(4 != '4');

// (l)4 != '4'
//Answer false
console.log(4 != '4');

// (m).4 !== '4'
//Answer false 
console.log(4 !== 4);

// (n.)Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length > 'jargon'.length)

// 5. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// (a).4 > 3 && 10 < 12
const checkA = 4 > 3 && 10 < 12;         // true && true -> true
console.log(checkA);

// (b).4 > 3 && 10 > 12
const checkB = 4 > 3 && 10 > 12          // true && false -> false
console.log(checkB);

// (c).4 > 3 || 10 < 12
const checkC = 4 > 3 || 10 < 12;         //true || false -> true
console.log(checkC);

// (d).4 > 3 || 10 > 12                  //true || false -> true
const checkD = 4 > 3 || 10 < 12;
console.log(checkD);

// (e).!(4 > 3)
const checkE = !(4 > 3);                //!(true) -> flase
console.log(checkE);

// (f).!(4 < 3)
const checkF = !(4 < 3);                //!(false) -> true
console.log(checkF);

// (g).!(false)
const checkG = !(false);                //!(false) -> true
console.log(checkG);

// (h).!(4 > 3 && 10 < 12)
const checkH = !(4 > 3 && 10 < 12);     //!(4 > 3 && 10 < 12) -> !(true && true) -> !(true) -> false
console.log(checkH);

// (i).!(4 > 3 && 10 > 12)
const checkI = !(4 > 3 && 10 > 12);     //!(4 > 3 && 10 > 12) -> !(true && false) -> !(false) -> true
console.log(checkI);

// (j).!(4 === '4')
const checkJ = !(4 === '4');            //!(4 === '4') -> !(false) -> true
console.log(checkJ);

// (k).There is no 'on' in both dragon and python
// console.log('python'.length > 'dragon'.length)

// Case I: if on is checked in "dragon and python"
const text = "dragon and python";

const bothNoOn = !/(?=(dragon|python))\bon/.test(text);
console.log("'on' is not present in both dragon and jargon:", bothNoOn); //output should be false

// case II: if on is checked individually in python and jargon
const StringOne = "dragon";
const StringTwo = "jargon";
const bothNoOnFunctwo = !("on" == StringOne) && !("on" == StringTwo);
console.log("'on' is not present in both dragon and jargon:", bothNoOnFunctwo);
// DEADLINE: EOD