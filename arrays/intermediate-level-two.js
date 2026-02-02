let primArr = [2, 4, 7, 9, 19, 10, 4, 19, 9,];
const refArr = [
    {id: 1, name: 'Bora'},
    {id: 2, name: 'Yusuf'},
    {id: 3, name: 'Olu'}
]

// removing elements from an array
// Begining of the array
const removed = primArr.shift();

// end of the array
const removedLast = primArr.pop();

// from any position
let removedArr = primArr.splice(3, 3);
console.log(removedArr);

// solution 1
removedArr = []
console.log(removedArr, primArr);

// solution 2
primArr.length = 0;
console.log(primArr);

// solution
console.log(refArr);
refArr.splice(0);
console.log(refArr);

// combining arrays
const one = [1,2,3];
const two = [4,5,6];
const three = [7,8,8];

const combOne = one.concat(two, three);
console.log(one, two, three, combOne);

// slicing an array
const sliced = combOne.slice(2, 5);

/*  when we exclude both the start and end index,
    we get a copy of the original array*/
const duplicate = combOne.slice();
console.log(duplicate, combOne);

const spread = [...one, ...two, 23, ...three];
console.log(spread);

// iterating an array
for (let index = 0; index < duplicate.length; index++) {
    const element = duplicate[index];
    // console.log(index, element);
}

duplicate.forEach(function (val) {
    console.log(val);
});

duplicate.forEach(function (val, idx) {
    console.log(val, idx);
});