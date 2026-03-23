sum();
add(2); // supply necessary arguments
// function declaration
function sum(){
    let a = 4;
    let b = 5;
    let sum = a + b;

    console.log(sum);
}

function add(a, b){
    // inputs to functions are called parameters
    let sum = a + b;
    console.log(sum);
}

// function expression
const fnOne = function find(){
    console.log('hello from function expression one');
}

const fnTwo = function (){
    console.log('hello from function expression two using anonymous function');
}

fnOne(); // call the function expression
fnTwo(); // call the function expression
// function call

let z = 5;
console.log('value of z', z);

// HOISTING