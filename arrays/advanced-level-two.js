let primArr = [2, 40, 7, 20, 9, 19, 10, 4, 19, 9,];
let primitiveArr = [2, 4, 10, 3, 12, 18, 16, 8, 14, 30,];
let duplicate = [2, 4, 7, 1, 9, 6, 8, 4, 3,];
const refArr = [
    {id: 2, name: 'Yusuf', score: 67},
    {id: 1, name: 'bora', score: 98},
    {id: 3, name: 'Olu', score: 79},
    {id: 4, name: 'Segun', score: 39}
]

// FILTERING AN ARRAY
const filtered = duplicate.filter(val => {
    return val % 2 === 0;
});

const aboveAvg = refArr.filter(obj => {
    return obj.score >= 50;
});

// MAPPING
const namedMapped = refArr.map(obj => obj.name);
const objMapped = duplicate.map((val, idx) => {
    return {
        id: idx,
        score: val,
    }
})

// console.log(filtered, aboveAvg, namedMapped, objMapped);

// CHAINING OPERATIONS
const chained = refArr.filter(obj => {
    return obj.score >= 50;
}).map(obj => obj.id);

console.log('chain', chained);

// REDUCING AN ARRAY
// alternative
let sum = 10;
for (let index = 0; index < primArr.length; index++) {
    sum += primArr[index];
}

const reduced = primArr.reduce((preVal, curVal) => {
    return preVal + curVal;
}, 10);

const aboveAvgReduced = refArr.filter(obj => {
    return obj.score >= 50;
}).reduce((preVal, curVal) => {
    return preVal + curVal.score;
}, 0);

const refactored = refArr.reduce((preVal, curVal) => {
    if(curVal.score >= 50){
        return preVal + curVal.score
    }
    return preVal;
}, 0)

console.log('primeArr sum', sum, reduced, aboveAvgReduced, refactored);