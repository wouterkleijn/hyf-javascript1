'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

let myStringNoComma = myString.replace(/,/g, " ");

console.log(myStringNoComma);
