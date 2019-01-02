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

// while loop
let myBool = true;
let index = 0;
while (myBool) {
    if (23 > index) {
        myBool = false;
    }
    index++;
}
// iterates through the loop 23 times, until myBool is changed to false, and the 
// loop ends.