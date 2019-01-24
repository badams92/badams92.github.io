/**
 * FUNCTIONS
 * 
 * 0. Functions are a named block of code that can be called by other parts of the 
 * program to reduce rewriting the same algorithms again, and thus reducing the chance 
 * for human error to be introduced by writing the same algorithm multiple times.
 * 
 * 1. When a function is declared and defined, it can have optional parameters.  These 
 * will be values that are passed to the function.  The function will use the parameters 
 * as variable names for some or all of the functionality within the code block.
 * 
 * 2. Functions are declared by starting with the keyword function, followed by a name, 
 * then parentheses with optional paramters, and then curly braces with a block of code 
 * within.
 * 
 * 3. Functions can be saved as a variable when written as a function expression.  These 
 * are written with the keyword var (or let) and a function name which is then assigned 
 * the value of a function with some code.  Function expressions are not hoisted to the 
 * top of the scope, while function declarations (as described in 2) are.
 * 
 * 4. If a function has optional parameters, it will be called with inputs as the 
 * argument(s).  If the function has a return statement, it will send a value back to 
 * where the function was called.  Once a function executes a return statement, the 
 * function will stop executing the rest of its code.
 * 
 * 5. Functions have a narrower scope than their parent or global scopes.  That is, 
 * functions can modify variables from their parent or global scopes, but variables 
 * within the function scope can not be modified outside of the function.  This allows 
 * for re-use of the same variable names across multiple functions, if desired.
 * 
 * 6. A closure is how JavaScript handles how functions interact with all the variables 
 * in its scope.  A function can access and change variables from its parent or global 
 * scope.  If a function changes the value of a variable in its parent scope, the 
 * variable will keep the new value.
 */
 
// function declaration with the parameters of two variables
function multiply(a, b) {
    return a * b;
}
// this function will return the product of its two input parameters

// multiply (and console.log) are called with an argument
console.log(multiply(17, 24)); // prints 408

// function expression, assigning an anonymous function to a variable
var func1 = function() {
    console.log("hello");
};

console.log(func1); // prints [Function]
console.log(multiply()); 

let results = [];

// a function that affects something in its parent scope
function sum(a, b) {
    results.push(a + b);
}

sum(1, 16); // results now stores the value of 17;
