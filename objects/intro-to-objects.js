let identity = {
    name: 'ibrahim', 
    age:18, 
    height: 5.8,
    address: {
        country: '9ja',
        state: 'Ogun',
        street: 'bla bla bla'
    },
    walk: function(){
        console.log('i am walking');
    }
}

// Factory function
function createPlayer() {
    // create the player object
    let player = {
        name: 'bora',
        age: 23,
        height: 5.6
    }
    // return the player object to your caller
    return player;
}

let messi = createPlayer();
let ronaldo = createPlayer();
// console.log(messi);
// console.log(ronaldo);

// factory function
function createPlayerWithParam(name, age, height){
    // create the player object
    let player = {
        name,
        age,
        height
    }
    return player;
}

let haaland = createPlayerWithParam('Erling Haaland', 24, 6.5);
haaland.country = 'Norway';
let neymar = createPlayerWithParam('Neymar', 33, 5.8);
delete neymar.height;
let salah = createPlayerWithParam('Mo Salah', 34, 5.9);

// console.log(haaland);
// console.log(neymar);
// console.log(salah);

// Constructor function
function Player(name, age, height, temp){
    this.name = name;
    this.age = age;
    this.height = height;
}

let yamal = new Player('Lamine Yamal', 18, 5.6);
let osimhen = new Player('Victor Osimhen', 27, 6.2);

/*  functions of the 'new' keyword
    1. Create an empty object
    2. Points 'this' keyword to the empty object which will be used to add properties to the object
    3. Return the object */
// console.log(yamal);

/*  CONSTRUCTOR PROPERTY    
    the constructor property reveals the function that was used in 
    creating the object
*/
let temp = {};
// will be translated
let temP = new Object();

// let n = 1;
let n = new Number(1);
// let name = 'Bora'
let name = new String('Bora');
// let isAlive = true;
let isAlive = new Boolean(true);

for (const ib in identity) {
    console.log(ib, identity[ib]);
}