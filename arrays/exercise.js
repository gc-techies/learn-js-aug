const arr = [15, 9, 10, 8, 6, 17, 20, 1, 7, 4, 18, 3, 11, 2, 13, 16, 5, 12, 14, 19];
const arrDesc = [15, 9, 10, 8, 6, 17, 20, 1, 7, 4, 18, 3, 11, 2, 13, 16, 5, 12, 14, 19];

arr.sort((a, b) => a - b);
arrDesc.sort((a, b) => b - a);
console.log(arr[arr.length - 6]);
console.log(arrDesc[5]);
console.log(arr);

