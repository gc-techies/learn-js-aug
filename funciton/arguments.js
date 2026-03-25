function add(a, b){
    console.log(arguments); // 2, the number of arguments passed
    return a + b;
}

function sum(){
    // no parameters defined, but we can still access the arguments object
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

// VarArgs => Variable length arguments
function restAdd(discount, ...params) {
    const total = params.reduce((acc, curr) => acc + curr, 0);
    return total - discount;
}

const result1 = add(2, 3); // 5
const result2 = add(10, 20); // 30
const result3 = add(5); // NaN, because b is undefined
const result4 = add(1, 2, 3); // 3, because the third argument is ignored
const result5 = sum(1, 2, 3, 4, 5, 6, 7); // 15

console.log(result1, result2, result3, result4);
console.log(result5, 'value of result5');
console.log(restAdd(2,3,5,7,9)); // 24, because the total is 30 and the discount is 20% (0.2)

// DEFAULT PARAMETERS OR PARAMETERS WITH DEFAULT VALUES
function calcInterest(principal = 500, rate = 1, time = 2) {
    return principal * rate * time;
}

console.log('interest due', calcInterest(1000, 4, undefined));