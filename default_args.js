// Old way

function oldSomething(a, b) {
    a = a || 1;
    // will still fail if zero
    // actually a = a || (a === 0) ? 0 || 1
    b = b || 2;
    return (a + b);
}

function something(a = 1, b = 2) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    return (a + b);
}

something(); // => 3
something(0, 0); // => 0
something(undefined, undefined); // => 3
something(undefined, 4); // => 5
something(3, undefined); // => 5
something(b=3, a=7); // => 9
