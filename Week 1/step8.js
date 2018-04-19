'use strict'; 

let myString = 'Hello';
console.log(myString);
console.log('I think this is a string variable');
console.log(typeof myString);

let number = 3;
console.log(number);
console.log('I think this is a number variable');
console.log(typeof number);

let carBrand = ['bmw', ' volvo', 'toyota'];
console.log(carBrand);
console.log('I think this is an array variable');
console.log(typeof carBrand);

let hyf;
console.log(hyf);
console.log('I think this is an undefined variable');
console.log(typeof hyf);

if (typeof myString == typeof number) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };

if (typeof myString == typeof carBrand) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };

if (typeof myString == typeof hyf) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };

if (typeof number == typeof carBrand) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };

if (typeof number == typeof hyf) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };

if (typeof carBrand == typeof hyf) {
    console.log('SAME TYPE')
}
else { console.log('Not the same type') };
