let x = 5;
let y = x;
x = 0;
x = 78;

console.log('value of x', x);
console.log('value of y', y);

function increment(a){
    a++;
    console.log('value of a', a);
}

increment(x);
console.log('value of x after function call', x);

let objOne = {
    goldBars: 10
}

let objTwo = objOne;

console.log('gold bars for one', objOne);
console.log('gold bars for two', objTwo);

function incrementGoldBars(obj) {
    obj.goldBars = obj.goldBars + 1;
}

incrementGoldBars(objTwo);

console.log('gold bars for one after func', objOne);
console.log('gold bars for two after func', objTwo);