// Enumerating properties of objects
let player = {
    name: 'bora',
    age: 23,
    height: 5.6
}

let playerB = player;

player['age'];
for(let prop in player){
    console.log(player[prop]);
}

if('namee' in player){
    console.log('property exists');
}else {
    console.log('back end guy! are you ok?');
}

// inefficient way
let clone = {};
for(let prop in player){
    clone[prop] = player[prop];
}

// efficient way using the spread operator (...)
let anotherClone = {...player, aliya: 10};

let a = 5;
let b = 5;

let str = " Adubi birahim ";
