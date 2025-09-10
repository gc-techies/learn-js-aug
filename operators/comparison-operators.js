// Relational Operators
let a = 4;
let b = 7;
let c = 7;

let ans = a > b;
console.log('is a bigger than b', ans);

ans = a < b;
console.log('is a smaller than b', ans);


ans = b > c
console.log("is b greater than c", ans);

ans = b >= c
console.log("is b greater than or equal c", ans);


ans = a <= c
console.log("is a lesser than or equal c", ans);

// EQUALITY OPERATOS
ans = a == b;
console.log('is a and b equal', ans);

ans = b == c
console.log("is b equal c", ans);

ans = !ans;
console.log('after first negating', ans);

ans = !ans;
console.log('after second negating', ans);

ans = a != b;
console.log('a not equal b', ans);

ans = c != b;
console.log('c not equal b', ans);

let x = 5;
let y = '5';
let z = true;
let m = 1;

//  LOSE EQUALITY CHECKING ONLY VALUES
ans = x == y;
console.log('lose equality x and y', ans);

ans = z == m;
console.log('lose equality m and z', ans);

ans = z != m;
console.log('lose non-equality m and z', ans);

// strict equality checking values and types
ans = x === y;
console.log('strict', ans);

ans = z !== m;
console.log('strict non-equality m and z', ans);

