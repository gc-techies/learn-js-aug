console.log('hello from composite');
// Objects, Arrays and Functions

// players, referees, stadia, leagues, managers, jersies
/*  PLAYERS
    speed, height, shot_power, jump_power, passing
    shot_accuracy, defense
*/
/*  LEAGUES
    investors, fan_base, trophies */

// object literal syntax
let player = {
    speed: 4, 
    height: 5, 
    shot_power: 7, jump_power: 2,
    passing: 9, shot_accuracy: 6,
    defense: 1
};

// dot notation and bracket notation
player.defense = 8.9;
player['jump_power'] = 2.3;


/*  ARRAYS  */
// Array literal syntax
let gct = [98, 67, 23, 12, 8, 'ibb'];
console.log('length of array', gct.length);


/*  FUNCTIONS   */
function greet(name){
    console.log('hi there, shey you no hear ni?', name);
    console.log('testing testing');
}

function multiply(a, b){
    console.log('answer is', a * b);
}

function add(a, b){
    let addition = a + b;
    return addition;
}

// function call
greet(4);
multiply(3, 15);

let result = add(30, 5);

console.log('result', result);