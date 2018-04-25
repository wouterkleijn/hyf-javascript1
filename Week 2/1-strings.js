'use strict';

const myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

const myStringNoComma = myString.replace(/,/g, " ");

console.log(myStringNoComma);
