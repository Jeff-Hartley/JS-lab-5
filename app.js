//importing code from modules
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';

//calling the functions and logging results
console.log('10 + 7 = ', add(10, 7)); // addition function
console.log('20 - 13 =', subtract(20, 7)); // subtract function
console.log('Making hello uppercase: ', toUpperCase('hello')); // uppercase function
console.log('MAKING HELLO LOWERCASE: ', toLowerCase('HELLO')); // lowercase function
console.log('6 * 9 = ', multiply(6,9)); //multiply function
console.log('Max: ', findMax([1, 2, 3, 4, 5])); //findMax array
console.log('Reversed: ', reverseArray([1, 2, 3])); //reverse Array
addAndLogUpper(10,20); // function to add and log uppercase string.

//final challenge
let mathArray = [1, 2, 3, 4, 5];
let maxArray= findMax(mathArray);
let multiplyArray = multiply(maxArray, 3);
console.log(" "); // create a gap in the console
console.log('the max of the array, multiplied by three and in uppercase string is: ', toUpperCase(multiplyArray.toString()));