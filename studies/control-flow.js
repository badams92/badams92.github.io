/**
 * CONTROL FLOW
 * 
 * 0. The ability to execute different blocks of code based on different conditions
 * 
 * 1. Uses if and switch blocks to choose the different code segments
 */
 
/**
 * IF
 * 
 * IF blocks evaluate whether an expression is true, and then run that code.  If the 
 * expression evaluates true, then no other conditions will be tested.
 * 
 * ELSE-IF
 * 
 * Some IF blocks can have multiple conditional statements.  These follow the initial 
 * IF statement with an else if (new condition).  Once the first if or else if 
 * expression is evaluated true, no other conditions will be tested.
 * 
 * ELSE
 * 
 * At the end of an IF block, you can have an ELSE segment, which is essentially an ELSE 
 * IF (true), so it will always evaluate the code that follows.
 * 
 * You will always want your IF, ELSE-IF, ELSE block to start from more restrictive and 
 * become less strict.
 * 
 */
 
if ("green" === "red") {
    console.log("you might be colorblind");
} else if (69 > 42) {
    console.log("you know how to count");
} else {
    console.log("you'll only see this if all the other conditions fail");
}
//prints you know how to count

/** 
 * SWITCH
 * 
 * 0. Switch blocks are like IF statements, but the cases for TRUE are more discrete and 
 * already known before execution.
 * 
 * 1. Unlike IF blocks, switches will not stop executing once a TRUE expression is 
 * encountered.  Therefore a break statement is needed between cases.
 * 
 */

let friedChicken = "popeyes";

switch (friedChicken) {
    case "canes":
        console.log("box combo, no slaw, extra sauce");
        break;
    case "chicken filet":
        console.log("12 count meal with waffle fries");
        break;
    case "popeyes":
        console.log("3 piece spicy dark combo with fries, and a side of gravy");
        break;
    default:
        console.log("8 piece family meal");
}
// prints 3 piece spicy dark combo with fries, and a side of gravy