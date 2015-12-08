"use strict" ;

var varFuns = [], letFuns = [];
for(var i = 0; i < 100; i++) {
    varFuns.push(function() { console.log(i); });
}
// redeclaration of original i
// for(var i = 0; i < collection.length; i++) {
//
// }

for(let j = 0; j < collection.length; j++) {
    letFuns.push(function() { console.log(j); });
}

// redeclaration allowed limited to scope of for
// new j created here
for(let j = 0; j < 20; j++) {
    {
        let j = 2;
        console.log(j);
    }
    console.log(j);
}
