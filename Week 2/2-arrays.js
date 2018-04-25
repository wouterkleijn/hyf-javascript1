'use strict';

const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');

console.log('I think the new value of the array will be blowfish, meerkat, capricorn, giraffe, turtle');

console.log(favoriteAnimals);

console.log('The array has a length of ' + favoriteAnimals.length + '\n contents: ' + favoriteAnimals.join(' '));

favoriteAnimals.splice(3, 1);

console.log(favoriteAnimals);

console.log(favoriteAnimals.indexOf('meerkat'));

console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
