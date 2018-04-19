'use strict'; 

let x = 7;
x = x % 3
console.log(x);

//the remainder operator is useful to find out the remainder of the division of two numbers


//this can be useful to find out if we are dealing with even or odd numbers, see the two examples below

let y = 63;
y = y % 2
console.log(y);

if (y == 0) {
    console.log('EVEN')
}
else { console.log('UNEVEN') };

let z = 64;
z = z % 2
console.log(z);

if (z == 0) {
    console.log('EVEN')
}
else { console.log('UNEVEN') };
