function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);

async function asyncAdd(a, b) {
    return a + b;
}

let asyncResult = asyncAdd(5, 3);
asyncResult.then((result) => console.log(result));

// fat arrow function expression
const asyncArrowAdd = async (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(a + b);
            reject('messi won the world cup');
        }, 5000);
    });
}

const errFunction = () => {
    throw new Error('this is an error');
}

const asyncFunctionCaller = async () => {
    try {
        console.log("Before addition");
        let arrowResult = await asyncArrowAdd(5, 3);
        console.log('after addition');
        console.log('arrow result', arrowResult);
    } catch (error) {
        alert(error);
    }
};

try {
    errFunction();
} catch (error) {
    console.error(error);
}
asyncFunctionCaller();
console.log('execution after async function caller');
