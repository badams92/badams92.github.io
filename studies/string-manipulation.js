/**
 * STRING OPERATORS
 * 
 * 0. Strings can be concatenated with + or +=
 */
 
var str1 = "hello";
var str2 = "operation spark";

console.log(str1 + " " + str2); // prints "hello operation spark"

str1 += str2;
console.log(str1); // prints "hellooperation spark"

/**
 * STRING METHODS
 * 
 * 0. Strings have a wrapper object that gives them several methods.
 * 
 * 1. Some common useful methods include length, character lookup, finding a substring 
 * within a string, changing case, and updating parts of a string.
 */
 
// length of a string
console.log(str1.length); // prints 20

// character lookup through bracket notation
console.log(str1[5]); // prints the 6th character, o

/**
 * Finding substrings through indexOf and slice.
 * 
 * indexOf returns the index at which a substring starts, or -1 if it isn't found within 
 * the string.
 * 
 * slice returns the substring from the starting index up to the ending index.
 */

console.log(str2.indexOf("spark")); // prints 10
console.log(str1.slice(4, 16)); // prints ooperation s

// changing case with toUpperCase() or toLowerCase()
console.log(str2.toUpperCase()); // prints OPERATION SPARK

// You can update part of a string with replace(pattern, replacement)
console.log(str2.replace("p","JavaScript")); // prints oJavaScripteration spark
