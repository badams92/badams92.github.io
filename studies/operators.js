/**
 * ASSIGNMENT OPERATORS
 * 
 * 0. Assignment operators assigns its left operand the value of its right operand.
 * 
 * 1. There are 13 assignment operators: Assignment (=), Addition assignment (+=), 
 * Subtraction assignment (-=), Multiplication assignment (*=), Division assignment (/=), 
 * Remainder assignment (%=), Exponentation assignment (**=), Left shift assignment 
 * (<<=), Right shift assignment (>>=), Unsigned right shift assignment (>>>=), Bitwise 
 * AND assignment (&=), Bitwise XOR assignment (^=), and Bitwise OR assignment (|=).
 * 
 */

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;
var h = 8;
var i = 9;
var j = 10;
var k = 11;
var l = 12;
var m = 13;
var n = 14;
var o = 15;

// assignment
a = b; // a is now equal to the value of b, 2

// addition assignment
b += c; // b = b + c, 5

// subtraction assignment
d -= e; // d = d - e, -1

// multiplication assignment
e *= f; // e = e * f, 30

// division assignment
f /= g; // f = f / g, 0

// remainder exponent
g %= h; // g = g % h, 1

// exponentiation assignment
h **= i; // h = h ** i, 134217728

// left shift assignment
i <<= j; // i = << j
/** 
 * This moves the right-most bits of x y spaces to the left. Zero bits are shifted in 
 * from the right.
 * This gives a new value of x * 2 ** y, since you are multiplying the value of x 
 * by y powers of 2.
 */

// right shift assignment
j >>= k; // j = j >> k, 0
/** 
 * this moves the left most bit of x y spaces to the right while copying the left-most 
 * bit the same amount of times. Because the sign bit stays the same, this is also known
 * as "sign-propagating" right shift.
 * This gives a new value of x * 2 ** -y
 */

// unsigned right shift assignment
k >>>= l; // k = k >>> l, 0
/**
 * Similar to right shift assignment, except that the sign bit is not copied, so that the
 * new value is always non-negative.
 */

// bitwise AND assignment
l &= m; // l = l & m, 12
/**
 * the AND operator compares the bits of x and y and only when both bits match, does the 
 * value perservere to the new value. Unmatching bits become 0.
 * 
 * In truth table form:
 *      0  1
 *    0|0  0|
 *    1|0  1|
 */

// bitwise exclusive OR (XOR) assignment
m ^= n; // l = l ^ m, 3
/**
 * the XOR operator compares the bit of x and y at each location, and only when both 
 * bits differ does a 1 get saved to that location for the new value.
 * 
 * In truth table form:
 *      0  1
 *    0|0  1|
 *    1|1  0|
 */

// bitwise OR assignment
n |= o; // n = o | p, 15
/**
 * Similar to the XOR operator, except that when either bit is a 1, does a 1 get
 * copied to the new value in that location.
 * 
 * In truth table form:
 *      0  1
 *    0|0  1|
 *    1|1  1|
 */
 
/**
 * ARITHMETIC OPERATORS
 * 
 * 0. The arithmetic operators are addition (+), subtraction (-), multiplication (*),
 * division (/), modulus or division remainder (%), exponentiation (**), increment (++), 
 * and decrement (--).
 * 
 */
 
// addition
a = 1 + 5; // a = 6

// subtraction
a = 5 - 3; // a = 2

// multiplication
a = 5 * 3; // a = 15

// division
a = 51 / 3; // a = 17

// modulus
a = 54 % 11; // a = 10

// exponentiation
a = 2 ** 9 // a = 512

// increment
a++ // a = 512 + 1, or 513

// decrement
a-- // a = 513 - 1, or 512

 
/**
 * COMPARISION OPERATORS
 * 
 * 0. The comparison operators are equal to (==), equal value and equal type (===), not 
 * equal (!=), not equal value or not equal type (!==), greater than (>), less than (<), 
 * greater than or equal to (>=), and less than or equal to (<=).
 * 
 * 1. Comparison operators always return a boolean.
 */
 
// equal to
console.log ("9" == 9); // prints true

// equal value and type
console.log("12" === 12); // prints false
console.log("12" === "12"); // prints true

// not equal
console.log("9" != 8); // prints true

// not equal value or type
console.log(12 !== "12"); // prints true

// greater than
console.log(12 > 9); // prints true

// less than
console.log(9 < 12); // prints true

// greater than or equal to
console.log(12 >= 15); // prints false

// less than or equal to
console.log(12 <= 8); // prints false
 
/**
 * UNARY OPERATORS
 * 
 * 0. A unary operator is an operation with only one operand.
 * 
 * 1. The unary operators are delete, typeof, void, +, -, ~, and !.
 */
 
var myContact = {id: 0, nameFirst: "Ben", nameLast: "Adams"};

// delete removes a property from an object.
console.log(myContact);
delete myContact.id; // removes the property "id" from an myContact
console.log(myContact);

/** 
 * typeof returns the data type of a variable or literal.
 * 
 * The results of typeof when the operand is Undefined: "undefined", Null: "object", 
 * Boolean: "boolean", Number: "number", String: "string", Symbol: "symbol", Function: 
 * "function", and any object: "object".
 * 
 * Null has returned a value of object since the beginning of Javascript.
 */
 
console.log(typeof myContact); // prints object
console.log(typeof myContact.nameFirst); // prints string
console.log(typeof 2); // prints number
console.log(typeof false); // prints boolean
console.log(typeof null); // prints object

// void evaluates the given expression and then returns undefined.

console.log(void "hello!"); // prints undefined

// + looks like addition, but it forces a numeric value for the operand
console.log(+"15"); // prints 15
console.log(+false); // prints 0

// negation returns the negative value of its operand
console.log(-"15"); // prints -15
console.log(-true); // prints -1

// ~ is the bitwise NOT, which inverts all the bits of the value
console.log(~0); // prints -1

// ! is the logical NOT, which converts false values to true, and vice versa
console.log(!true); // prints false

/**
 * TERNARY OPERATOR
 * 
 * 0. There is the one ternary operator in JavaScript, and is used as shorthand for if
 * 
 * 1. in the format a ? b : c, a is tested for truth. If true, return b. If false, 
 * return c.
 */
 
var age = 16;
var licensedToDrive = (age > 15) ? "can drive" : "must be a passenger";
console.log(licensedToDrive); // prints can drive