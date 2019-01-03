/**
 * NUMBERS
 * 
 * 0. Javascript has only one type of number: 64-bit Floating Points, following the 
 * IEEE 754 standard.
 * 
 * 1. This means that the range of values that can be expressed is from +/- 2.23 x
 * 10^-308 to +/- 1.8 x 10^308.
 * 
 * 2. Of the 64 bits, one is used as a sign bit, which means that there can be both a 
 * negative and positive zero as well as a negative and positive infinity.
 * 
 * 3. Of the remaining 63 bits, 11 are used for the exponent, and 52 are used for the 
 * mantissa.
 * 
 * 4. The typical binary represenation is [sign bit][exponent for 11 bits][mantissa for
 * 52 bits].
 */
 
// Examples of numbers
var num1 = 5;
var num2 = 3.14;
console.log(num1); // prints 5
console.log(num2); // prints 3.14

/**
 * Numbers without decimals and numbers with decimals can be used together for any
 * mathematical operation.
 */
var num3 = 5 + 3.14;

/**
 * Zero is stored in binary as 0b[0 or 1]0..0.
 * That is, the leftmost bit (the sign bit) can be either 0 or 1, as long as the 
 * remaining bits are all 0s.
 * Positive infinity is represented as 0b0111111111110..0
 * That is, all 11 bits of the exponent are given a value of 1, while all 52 bits of the
 * mantissa are 0.
 * Negative infinity is represented in a similar way, however the sign bit is flipped to
 * 1: 0b1111111111110..0
 * Positive and negative inifities can be produced by dividing by zero.
 */
console.log(2 / 0); // prints Infity
console.log(-5 / 0); // prints -Infinity.
 
/** 
 * NaN, or "Not a Number" is represented in a similar way as positive and negative 
 * infinity, except that any bit in the mantissa section is a 1.
 * NaN is generated in a couple ways:
 *  0. Operations involving a NaN.
 *  1. Indeterminate forms, such as 0 divided by 0 and Infinity multiplied by Infinity
 *  2. Operations that return a complex number, such as taking the square root of a 
 *  negative number.
 * 
 * 3. Mixing numbers with other datatypes.
 */
 
console.log(Math.sqrt(-9)); // prints NaN
console.log(69 * "sixty nine!"); // prints NaN
 
/**
 * STRINGS
 * 
 * 0. All text is stored as strings.  Unlike some other languages, there is not a 
 * datatype for a single character.
 * 
 * 1. Strings are enclosed within three types of character: single quotes, double 
 * quotes, or backticks.
 */

// A string declared with a single quote
var single = 'single quotes';
var double = "double quotes";
var backticks = `backticks`;

// Single and double quotes are essentially the same.
console.log(single + double); // prints "single quotesdouble quotes"

/** 
 * Backticks allow for string interpolation, where any expression can be embedded into
 * the string, such as function calls.
 */
console.log(`5 + 9 = ${5 + 9}`); // prints "5 + 9 = 14"

/** 
 * Single and double quotes allow for the use of special characters, such as "\n" for a 
 * line, or "\t" for a tab.
 */
console.log("This will be separated\n by a new line");  // prints This will be separated 
                                                        // by a new line


/**
 * BOOLEAN
 * 
 * Boolean is a data type that only has two states: True or False.
 */

var myBool = false;
console.log(myBool); // prints false;

/**
 * Comparison operators such as equal to (==), greater
 * than (>), and (<) all return boolean values.
 */
console.log(42 > 13); // prints true;

/**
 * comparisons with the triple equals sign (===) checks for both value and type, while
 * the double equals sign is less strict.
 */
console.log(42 == '42'); // prints true
console.log(42 === '42'); // prints false

/**
 * ARRAYS
 * 
 * 0. An array is a variable that can hold a list of potentially multiple values.
 * 
 * 1. These values do not have to be the same type.
 * 
 * 2. Arrays are also dynamically sized, and each element of the array is given an 
 * index, starting with 0.
 * 
 * 3. Elements within the array are accessed through bracket notation and their index.
 * 
 * 4. All arrays have the length property, which returns the amount of elements in the 
 * array.
 * 
 * 5. Arrays feature two methods for adding new elements: push and unshift.
 * 
 * 6. Arrays feature two methods for removing elements: pop and shift.
 */
 
var myArr = [12, "string", false, [13, "embedded array"]];
console.log(myArr.length); // prints 4
myArr.pop(); // removes the last element from the array, and returns it.
console.log(myArr.length); // prints 3
console.log(myArr[0]); // prints the first element of the array: 12
myArr.shift();  // removes the first element from the array, returns it, and then 
                // reindexes the array
console.log(myArr[0]); // prints string, the new first element
myArr.push(15); // Adds a new element to the end of the array.
console.log(myArr[myArr.length - 1]); // prints the last element: 15
myArr.unshift("first!");
console.log(myArr[0]); // prints first!

/**
 * OBJECTS
 * 
 * 0. Objects are variables whose elements are defined by a key:value pairing.  These 
 * elements are called properties of the object.
 * 
 * 1. Objects may also have functions, which are called methods.
 * 
 * 2. Properties can be accessed by either dot notation or bracket notation.
 * 
 * 3. Properties are assigned by propertyName: value.  New properties can be added by dot
 * notation.
 * 
 */
 
// declaration of an object
var book = {author: "Kurt Vonnegut", title: "Slaughterhouse-Five"};

// accessing a single property of an object using dot notation
console.log(book.author); // prints Kurt Vonnegut
// accessing a single property of an object using bracket notation
console.log(book["author"]); // prints Kurt Vonnegut
 
//  adding a new property to the book
book.yearPublished = 1969;

// accessing all properties of an object using bracket notation and a for loop
for (let key in book) {
 console.log(book[key]);
}

// removing properties from an object
delete book.author;

console.log(book.author); // prints undefined

// adding a new method to an object
book.getPublcationYear = function() {
    console.log(this.yearPublished);
};

book.getPublcationYear(); // prints 1969

/**
 * FUNCTIONS
 * 
 * 0. A function is a block of code that runs a specific task.
 * 
 * 1. A function does not run until called or invoked.
 * 
 * 2. A function is defined by the function keyword, followed by a name, followed by a 
 * set of parentheses with optional parameters inside, lastly followed by curly brackets 
 * with the code block to be executed.
 * 
 * 3. Functions are called by function name with a set of parentheses with arguments 
 * inside, if necessary.
 * 
 * 4. Functions will often run until they come across a return statement. This return 
 * statement typically returns a value, such as an array or string. Once the function 
 * reaches the return statement, the function will stop.
 * 
 * 5. Functions are useful for when the same set of operations have to be applied
 * several times and to many different objects/variables. This allows programmers to
 * follow a core tenet of coding: Don't Repeat Yourself. Repeating code introduces 
 * the possibilty for more human mistakes and improves readability.
 */

// example of a function declaration
function add(x, y) {
    return x + y;
}

console.log(add(3, 25)); // prints 28

/**
 * add has two parameters (x and y). The function then returns the sum.
 * add is then called by writing add() with any two numbers or variables in the 
 * paranthese as arguments.
 */

/**
 * UNDEFINED
 * 
 * 0. Undefined is the result when a variable has not been assigned or initialized a 
 * value.
 * 
 * 1. Undefined is a primitive type of Javascript.
 * 
 * 2. A function will return undefined if a value was not returned.
 */
 
let x;
console.log(typeof x); // prints undefined

/**
 * NULL
 * 
 * 0. Null expresses a lack of identification, which means that a variable points to no 
 * object.
 * 
 * 1. Null is defined as an object for legacy reasons.
 * 
 * 2. Under strict equality (===), null is not equal to undefined, but with an equaltiy 
 * operator (==), they are equal.
 */

let nullVar = null;
console.log(typeof nullVar); // prints object

// null and undefined comparisons
console.log(null == undefined); // prints true
console.log(null === undefined); // prints false

/**
 * PRIMITIVE AND COMPLEX DATA TYPES
 * 
 * 0. There are 6 primitive data types: Boolean, Null, Undefined, Number, String, and 
 * Symbol.
 * 
 * 1. All primitive data types are not objects and have no methods.
 * 
 * 2. Primitive data types are immutable and are copied by value.  This means that 
 * actual value of the variable is passed to the function or method since the size of the value in
 * memory is 8 bytes or less, which is small and not a hassle to copy multiple times.
 * 
 * 3. There are 3 complex data types: Object, Array, and Function.
 * 
 * 4. Complex data types are mutable and are copied by reference. This means that only 
 * the location in memory of the value is passed to the function or method.  Complex 
 * data types can have an indefinite size, and it would be costly to copy the entire 
 * value each time it is called.
 */