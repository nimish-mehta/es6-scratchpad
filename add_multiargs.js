"use strict";

function add(...args) {
    return args.reduce((a, b) => a + b );
}

console.log(add(1, 2));
console.log(add(2, 3, 4));
