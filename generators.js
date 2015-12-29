"use strict";

function *range(start, stop, step) {
    start = start || 0;
    stop  = stop || Number.POSITIVE_INFINITY;
    step = step || 1;
    for(let i = start; i < stop; i += step) {
        yield i;
    }
}

function *take(count, generator, fn) {
    for(let i = 0; i < count; i++) {
        if (fn) {
            yield fn(generator.next().value);
        } else {
            yield generator.next().value;
        }
    }
}

function *cycle(values) {
    var i = 0, length = values.length;

    while(true) {
        yield values[i++ % length];
    }
}

function *iterate(fn, initial) {
    var result = initial;
    while(true) {
        yield result;
        result = fn(result);
    }
}

function each(generator, method) {
    var result = [], value = generator.next();
    while(!value.done) {
        result.push(value.value);
        method(value.value);
        value = generator.next();
    }
    return result;

}

function map(generator, method) {
    var result = [], value = generator.next();
    while(!value.done) {
        result.push(method(value.value));
        value = generator.next();
    }
    return result;
}

function fiboStep(terms) {
    var t1 = terms[0], t2 = terms[1];
    return [t2, t1 + t2];
}

function *fibonacci_series() {
    for(let i of iterate(fiboStep, [1, 1])) {
        yield first(i);
    }
}

for(let i of take(30, fibonacci_series())) {
    console.log(i);
}

function first(seq) {
    return seq[0];
}



// for(let i of range(0, 2000, 50)) {
//     console.log(i);
// }

// map(range(1, 10), (val) => val * 100);
// each(range(1, 100), (val) => console.log(val));

// for(let i of take(1000, range(1, 10))) {
//     console.log(i);
// }

// for(let i of take(100, cycle(['a', 'b', 'c']))) {
//     console.log(i);
// }

// for(let i of take(10, iterate(fiboStep, [1, 1]), first)) {
//     console.log(i);
// }

// for(let i of take(40, cycle([3, 1, 2]))) {
//     console.log(i);
// }

// List comprehensions

[for (i of range(1, 100)) i * i];

// Sum of all numbers divisble by 3 or 5 less than 1000
[for (i of range(1, 1000)) i]
    .filter((a) => (a%3 == 0) || (a%5 == 0))
    .map((a) => a * a )
    .reduce((a, b) => a + b);
