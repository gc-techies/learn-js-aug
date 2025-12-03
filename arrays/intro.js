// array literal syntax
let arr = []; // an empty array
const arrTwo = ['a', 'b', 'c', true, 1, 3,];
// Add elements to an array

// to the end
arrTwo.push('z');

// to the begining
arrTwo.unshift('x', 'y');

// to any position
arrTwo.splice(0, 0, 'm', 'n');

console.log(arrTwo);