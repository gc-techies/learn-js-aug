// repetition structures are commonly known as LOOPS
// for loop, while loop, do/while loop, for...in loop, for...of loop

/*  FOR LOOP
    SYNTAX
    for(initialization_expression; loop_condition; increment/decrement expression/statement){
        //  codes to be repeated
    }
*/

for(let count = 1; count <= 100; count += 1){
    if(count % 2 === 0){
        console.log(count ,' is even');
    }else {
        console.log(count, 'is odd');
    }
}