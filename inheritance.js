"use strict";

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Properties
    get area() {
        return this.height * this.width;
    }

    get perimeter() {
        return 2 * (this.height + this.width);
    }

}

class Square extends Polygon {
    constructor(side) {
        super(side, side);
    }
}

const myPolygon = new Polygon(10, 20);
const mySquare = new Square(10);

console.log(myPolygon.area);
console.log(mySquare.area);
console.log(mySquare.perimeter);
