'use strict';

function vehicleType(color, age, type) {
    let result = "Unknown Vehicle";
    let condition = age <= 1 ? " new" : " used";
    let typeOfWheels = [" car", " motorbike", " caravan", " bike"];
    result = "a " + color + condition + typeOfWheels[type];
    return result;
}

console.log(vehicleType('red', 2, 3)); // --> a red used bike

console.log(vehicleType('green', 1, 2)); // --> a green new motorbike

console.log(vehicleType('red', 3, 3)); // --> unknown vehicle
