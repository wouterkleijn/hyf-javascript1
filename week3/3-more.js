'use strict';

function printObject(object) {
    // Makes an array first name, last name and city (keys)
    const keyNames = Object.keys(object);

    for (let index = 0; index < keyNames.length; index++) {
        // When keyName is 0 = firstName --> refers to every element in the array
        const key = keyNames[index];
        // Refers to all values in the keys in the object (wouter, kleijn, amsterdam)
        const value = object[key];
        console.log(key + " = " + value);
    }
}
const person = {
    firstName: 'Wouter',
    lastName: 'Kleijn',
    city: 'Amsterdam'
};

printObject(person);

