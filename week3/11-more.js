'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

// this should be false - but why?
console.log(x == y);

// this should be false
console.log(x === y);

// this should be true
console.log(z === y);

// this should be false
console.log(z === x); 
