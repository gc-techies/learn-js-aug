// object literal syntax
let obj = {}; // => empty object
let player = {
    name: "Messi",
    isActive: true,
    speed: 4, 
    height: 5, 
    shot_power: 7, jump_power: 2,
    passing: 9, shot_accuracy: 6,
    defense: 1
};

// reading a property using a dot notation
console.log(player.name);
// writing to a property using a dot notation
player.name = "Lamine Yamal";

// reading a property using a bracket notation
console.log(player['name']);
// write to a property using bracket notation
player['name'] = 'Pedri';

// Array literal syntax
let cart = []; // => empty array
let nums = [3, 5, 6];
let names = ['bora', 'messi', 'lamine'];
let mixed = [1, 'two', true, {}, []];

nums[1] = 'hello';
console.log('element at index 1', nums[1]);
console.log('length', nums.length);

// declaring functions with parameter
function functionName(a){
    console.log('hello', a);
}

// declaring funtion with parameters
function addNumbers(one, two){
    let result = one + two;
    console.log('result', result);
    return result;
}

// function call with argument
functionName(false);
// function call with arguments
addNumbers(5, 4);

let answer = addNumbers(32, 21);
console.log('answer', answer);