/**
 * LOOPS
 * 
 * 0. There are 2 types of loops: for and while.
 * 
 * 1. for loops iterate through their block of code while incrementing a counter.
 * 
 * 2. for loops also have the ability to iterate through each element of an array, or 
 * each property of an object.
 * 
 * 3. while loops iterate through their block of code while their condition is true.
 */
 
// for loop
for (let i = 1; i < 124; i += 2) {
    console.log(i);
}
// prints every odd number from 1 to 123.

let arr = ["apple", "banana", "kiwi", "dragon fruit", "eggplant"];

for (let key in arr) {
    console.log(arr[key]);
}

// we can also iterate backwards through an array
for (let i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]);
}
// prints each element of the array on a new line

let obj = {
  nameFirst: "Ben",
  nameLast: "Adams",
  hobbies: ["guitar", "bass", "video games", "drinking"]
};

for (let key in obj) {
    console.log(obj[key]);
}
// prints the values of the object on a new line

/**
 * While loops are used when the end condition can change during runtime, or the amount 
 * of times to iterate is not known at the time of writing.
 * 
 * While loops run when their condition is true, and this condition can be manipulated 
 * by other functions.
 */
let arr2 = [1, 2, 3, 4, 5, 6];
while (arr2.length > 0) {
    console.log(arr2.pop());
}
/**
 * loops until the array has only one element. Its end condition changes because we are 
 * manipulating the contents and length of the array.
 */


