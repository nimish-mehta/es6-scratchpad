"use strict";


var scope = "Global Scope";

var ABC = (function() {
    function ABC() {
        this.a = 199;
        this.scope = "Object Scope";
    }

    ABC.prototype.sayA = function() {
        console.log(this.a);
        console.log(this.scope);
    };

    ABC.prototype.withoutArrow = function() {
        return function() {
            this.sayA();
        };
    };

    ABC.prototype.withArrow = function() {
        return () => {
            this.sayA();
        };
    };

    return ABC;
}());

function sayScope() {
    console.log(this.scope);
}



let demoObj = new ABC();
document.getElementById('without-arrow').onclick = demoObj.withoutArrow();
document.getElementById('with-arrow').onclick = demoObj.withArrow();
document.getElementById('say-scope').onclick = () => { this.sayScope(); };
