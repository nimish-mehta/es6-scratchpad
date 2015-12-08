"use strict";

let val = 100;
console.log(val);

// braces start a new scope
{
    let val = 10;
    console.log(val);
}
console.log(val);


/**
 Same thing with var fails.
**/

var otherval = 100;
console.log(otherval);

// braces start a new scope
{
    var otherval = 10;
    console.log(otherval);
}
// value overwritten
console.log(otherval);
