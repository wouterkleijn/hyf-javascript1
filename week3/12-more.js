'use strict';
const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);

//Making a change to o1 does not affect o3 because const o1 is not linked to o3 (in line 2-4)
//Making a change to o2 does affect o3 because both variables are linked (in line 4)
