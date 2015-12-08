"use strict";
/*
* In development on chrome. runs on ie edge and chrome
*/

/**/
var [a, b] = [1, 2];
console.log(a);
console.log(b);

var {a, j} = {a: 1 , j: "value of j"};

var objCollection = [{ a: 1, b: 2, c: { k: 1 }}, { a: 1, b: 3, c: { k: 2 }}, { a: 1, b: 4, c: { k: 3 }} ];

for({b} of objCollection) {
    console.log(b);
}

for({b, c: {k}} of objCollection) {
    console.log(b);
    // c will not be available
    // console.log(c);
    console.log(k);
}

/**/
function add(...args) {
    return args.reduce((a, b) => a + b );
}

console.log(add(1, 2));
console.log(add(2, 3, 4));
