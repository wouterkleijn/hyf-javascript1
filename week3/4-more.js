'use strict';

function vehicleType(color, type) {
    let result = "Unknown Vehicle";
    if (type === 1) {
        result = "a " + color + " car";
    }
    else if (type === 2) {
        result = "a " + color + " motorbike";
    }
    return result;
}

console.log(vehicleType('red', 1)); // --> a red car
console.log(vehicleType('blue', 2)); // --> a blue motorbike
console.log(vehicleType('red', 3)); // --> unknown vehicle
