// Enumerating properties of objects
let player = {
    name: 'bora',
    age: 23,
    height: 5.6
}

player['age'];
for(let prop in player){
    console.log(player[prop]);
}

if('name' in player){
    console.log('property exists');
}else {
    console.log('back end guy! are you ok?');
}

// inefficient way
let clone = {};
for(let prop in player){
    clone[prop] = player[prop];
}