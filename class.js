"use strict";

class ExampleClass {

  constructor() {
    this.attr = `nums's value is ${this.num}`;
    // not allowed only getter available
    // this.dynamicAttr = 'abc'
    this.num = 10;
  }
  get num() {
    return this._num * 2;
  }

  get dynamicAttr() {
    return `nums's value is ${this.num}`;
  }

  set num(val) {
    this._num = val + 1;
  }

  static saySomething() {
    console.log('hello');
  }
}

var obj = new ExampleClass();
console.log(obj.attr);
console.log(obj.num);
console.log(obj.dynamicAttr);
// still exists
console.log(obj._num);
console.log(ExampleClass.saySomething());
