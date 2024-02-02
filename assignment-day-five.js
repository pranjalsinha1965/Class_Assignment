// Day-5 

//Question-1
// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const myVar = "Easy JavaScript Assignments";

//Question-2
// Print the length of the string.
console.log(myVar.length);

//Question-3
// Change all the string characters to capital letters using toUpperCase() method
console.log(myVar.toUpperCase());

//Question-4
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(myVar.toLowerCase());

//Question-5
// 5. Slice out the first word of the string using substr() and substring() method
console.log(myVar.substr(0, myVar.indexOf(' ')));//using substr method

console.log(myVar.substring(0, myVar.indexOf(' ')));//using substring method

//Question-6
// 6. Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(myVar.slice(myVar.indexOf('JavaScript'), myVar.length));

//Question-7
// 7. Check if the string contains a word Script using includes() method
console.log(myVar.includes('Script'));

//Question-8
// 8. Split the string into an array using split() method
const myArr = myVar.split();
console.log(myArr);

//Question-9
// 9. Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(myVar.split(' '));

//Question-10
// 10. 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const newArray = 'ELTP, BATCH, THREE'.split(',');
console.log(newArray);

//Question-11
// 11. Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(myVar.replace('JavaScript', 'Python'));

//Question-12
// 12. What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(myVar.charAt(20));

//Question-13
// 13. What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(myVar.charCodeAt(myVar.indexOf('J')));

//Question-14
// 14. Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(myVar.indexOf('a'));

//Question-15
// 15. Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(myVar.lastIndexOf('a'));

//Question-16
// 16. Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(myVar.indexOf('Easy'));

//Question-17
// 17. Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(myVar.lastIndexOf('Easy'));

//Question-18
// 18. Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(myVar.search('Easy'));

//Questiond-19
// 19. Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log('       Easy JavaScript Assignments, Easy Easy             '.trim());

//Question-20
// 20. Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(myVar.startsWith('Easy'));

//Question-21
// 21. Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(myVar.endsWith('Assignments'));

//Question-22
// 22. Use match() method to find all the a’s in 'Easy JavaScript Assignments'
//for finding all the capital and smaller a`s I have used both 'A' and 'a'
//or else we can also use toUpperCase and toLowerCase 
console.log(myVar.match(/a/g));
console.log(myVar.match(/A/g));

//Question-23
// 23. Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy'.concat('JavaScript'));

//Question-24
// 24. Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy JavaScript'.repeat(3));

//Question-25
// 25. 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
console.log("JavaScript is Easy, too Easy, too Easy, Easy to learn".match(/Easy/g).length);

//Question-26
// 26. Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
const sentenceCount = "Javascript is Easy, too Easy, too Easy, Easy to learn";
const easyCount = sentenceCount.match(/Easy/g).length;
console.log(easyCount);

//Question-27
// 27. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y;
const sentenceClean = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
const cleanedSentence = sentenceClean.replace(/[^\w\s]/g,'');// for removing special characters
const words = cleanedSentence.split(/\s+/); // for splitting sentences into words

//for counting the occurences of each word
const wordCount = {};
words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});

//finding the most frequent word
const mostFrequentWord = Object.keys(wordCount).reduce((a, b) => (wordCount[a] > wordCount[b] ? a : b));
console.log(mostFrequentWord);

//Question-28
// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const incomeText = ' earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const numbers = incomeText.match(/\d+/g);// extracts numbers
const totalIncome = numbers.reduce((sum, num) => sum + parseInt(num), 0);// calculates the total income
console.log(totalIncome);


















