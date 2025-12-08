// finding elements in an array
let primArr = [2, 4, 7, 9, 19, 10, 4, 19, 9,];
const result = primArr.indexOf(9, 4);
if(result > -1){
    console.log('item found');
}else {
    console.log('item not found');
}
// console.log(result, 'result');

const r = primArr.lastIndexOf(19, 5);
// console.log(r, 'r');

const found = primArr.includes(9)
// console.log(found, 'found');

// finding reference types
const refArr = [
    {id: 1, name: 'Bora'},
    {id: 2, name: 'Yusuf'},
    {id: 3, name: 'Olu'}
]

const search = refArr.includes({id: 2, name: 'Yusuf'});
console.log(search);
const temp = refArr.find(function (param) {
    if(param.id === 21){
        return true;
    }else {
        return false;
    }
});

console.log(temp);