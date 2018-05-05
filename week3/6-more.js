
'use strict';

function vehicleType(color, type, age) {
    let result = "Unknown Vehicle";
    let condition = age <= 1 ? " new" : " used";
    if (type === 1) {
        result = "a " + color + condition + " car";
    }
    else if (type === 2) {
        result = "a " + color + condition + " motorbike";
    }
    return result;
}

console.log(vehicleType('red', 1, 1)); // --> a new red car
console.log(vehicleType('blue', 2, 2)); // --> a blue used motorbike
console.log(vehicleType('red', 3, 3)); // --> unknown vehicle


