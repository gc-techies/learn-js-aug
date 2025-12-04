// finding elements in an array

let primArr = [2, 4, 7, 9, 19, 10, 4, 19, 9,];
const result = primArr.indexOf(9, 4);
if(result > -1){
    console.log('item found');
}else {
    console.log('item not found');
}
console.log(result, 'result');

const r = primArr.lastIndexOf(19, 5);
console.log(r, 'r');

const found = primArr.includes(9)
console.log(found, 'found');