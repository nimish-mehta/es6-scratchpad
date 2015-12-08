"use strict";

class Node {
    constructor(val) {
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
}

let root = new Node(6);
let tr1  = new Node(3);
let tr2  = new Node(1);
let tr3  = new Node(4);
let tr4  = new Node(7);
let tr5  = new Node(8);

/*
*     6
*    / \
*   3   7
*  /\    \
* 1  4    8
*
*/

root.left = tr1;
tr1.left = tr2;
tr1.right = tr3;
tr4.right = tr5;
root.right = tr4;
console.log(root);

function *inorder_traverse(node) {
    if (node.left) {
        yield *inorder_traverse(node.left);
    }
    yield node;
    if (node.right) {
        yield *inorder_traverse(node.right);
    }
}

for (let node of inorder_traverse(root)) {
    console.log(node.val);
}

function *skip_even(generator) {
    let flipFlop = false;
    for (let term of generator) {
        if (flipFlop) {
            yield term;
        }
        flipFlop = !flipFlop ;
    }
}

console.log('****Skipping Even****');
for(let node of skip_even(inorder_traverse(root))) {
    console.log(node.val);
}
