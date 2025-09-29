// repetition structures are commonly known as LOOPS
// for loop, while loop, do/while loop, for...in loop, for...of loop

/*  FOR LOOP
    SYNTAX
    for(initialization_expression; loop_condition; increment/decrement expression/statement){
        //  codes to be repeated
    }
*/
let count = 1;
for(; ; ){
    if(count > 100){
        break;
    }
    if(count % 2 === 0){
        console.log(count ,' is even');
    }else {
        // continue;
        console.log(count, 'is odd');
    }
    count += 1;
}

// STRING CONCATENATION
let a = 'my name';
let b = ' is ibrahim';
let d = 'i am hungry';
d += ', but i will be fine';
let c = a + b;
console.log(d);

// NESTED LOOP
for(let num = 1; num <= 5; num++){
    let stars = '';
    for(let inner = 1; inner <= num; inner++){
        stars += "*";
    }
    console.log(stars);
}

/*  WHILE LOOP
    SYNTAX
    while(loop_condition){
        // loop body
        // find a way to negate the loop condition
    }
*/

let counter = 100;
while(counter > 1){
    console.log(counter, 'in while loop');
    counter--;
}

/*  do/while
    SYNTAX
    do{
        // code block
    }while(loop_condition)
*/

let m = 5;
do{
    console.log(m, 'in do/while loop');
    m++;
}while(m < 1);
console.log(m, 'new value of m');