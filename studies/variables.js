/**
 * VARIABLES
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.
 * Variables are named identifiers that can point to values of a particular type like a
 * Number, String, Boolean, Array, Object or another data-type.  Variables are called so
 * because once created, we can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use any of the three keywords:var, let, or const, followed
 * by a name (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or 
 * assignment).
 */

// 1. declaration //
var myName;
let myVar;

/**
 * At the declaration phase, the variables myName and myVar are undefined because we have 
 * NOT initialized them to anything
 */
console.log(myName); // prints => undefined
console.log(myVar); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john
myVariable = 'john';
console.log(myVar); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob
myVariable = 'bob';
console.log(myVar); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with
// constants
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * Constants, however, cannot be declared with initializing a value. Like its name 
 *suggests, constants cannot be re-assigned a new value.
 */
 
const myConst = 'bob';
console.log(myConst); // prints => bob
myConst = 'john'; // will not change the value of myConst.
console.log(myConst); // prints => bob

/**
 * Hoisting is a mechanism within Javascript where variables declared with the keyword
 * "var" can be assigned and used before their declaration line.
 * The Javascript interpreter will move the declaration statements to the beginning of 
 * the variable's scope.
 * Variables declared with "let" or "const" will not be hoisted.
*/
 
x = 5;
var x; // hoisting will ensure that this line runs before the assignment on the 
       // previous line.

/**
 * Hoisting can also work on functions declared in the scope.
 * This allows for functions to be defined later on in the project, while still being 
 * referenced earlier in the project.
 * 
 * One caveat: if Javascript is operating in strict mode, variables must be declared 
 * before they can be used.
 * 
*/
