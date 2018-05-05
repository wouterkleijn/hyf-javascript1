'use strict';

const dummyVariable = new Object();

const ourWonderfulTeachers = [
    { firstName: 'Jim', lastName: 'Cramer' },
    { firstName: 'Rohan', lastName: 'Nicholls' },
    { firstName: 'Unmesh', lastName: 'Josi' },
    { firstName: 'Hardit', lastName: 'Singh' },
    { firstName: 'Osman', lastName: 'Üngür' },
    { firstName: 'Bonan', lastName: 'Zhao' },
    { firstName: 'Philipp', lastName: 'Beau' },
    { firstName: 'Dine', lastName: 'Gomes' },
];

ourWonderfulTeachers[0, 1].languages = ["JavaScript"];
ourWonderfulTeachers[2, 3, 4, 5].languages = ["GIT/CLI"];
ourWonderfulTeachers[6, 7].languages = ["HTML", "CSS"];

console.log(ourWonderfulTeachers);
