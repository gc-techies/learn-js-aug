let primArr = [2, 40, 7, 20, 9, 19, 10, 4, 19, 9,];
let primitiveArr = [2, 4, 10, 3, 12, 18, 16, 8, 14, 30,];
let duplicate = [2, 4, 7, 1, 9, 6, 8, 4, 3,];
const refArr = [
    {id: 2, name: 'Yusuf', score: 67},
    {id: 1, name: 'bora', score: 98},
    {id: 3, name: 'Olu', score: 79},
    {id: 4, name: 'Segun', score: 39}
]

// primitiveArr.sort();
duplicate.reverse();
console.log(duplicate);

// refArr.sort(function (a, b) {
//     if(a.id < b.id){
//         return -1;
//     }
//     if(a.id === b.id){
//         return 0;
//     }
//     return 1;
// });

refArr.sort(function (a, b) {
    let aName = a.name.toLocaleLowerCase();
    let bName = b.name.toLowerCase();
    if(aName < bName){
        return -1;
    }
    if(aName === bName){
        return 0;
    }
    return 1;
});

console.log(refArr);

// Testing the elements of an array
// 1. every 
// 2. some

const bool = primitiveArr.every((val, idx) => {
    console.log('element', val);
    /*
    if(val % 2 === 0){
        return true;
    }
    return false;
    */
   return val % 2 === 0;
});

const belowAvg = refArr.some((obj) => {
    return obj.score <= 50;
});
console.log(bool, 'every');
console.log(belowAvg, 'some');