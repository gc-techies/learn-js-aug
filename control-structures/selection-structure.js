/*  if selection structure  
    SYNTAX
    if(boolean_condition){
        // code block
    }
*/
let standardAge = 18;
let yourAge = 12;
if(yourAge >= standardAge){
    console.log('Thank you for registering');
}
console.log('testing after if block');
/*  if...else selection structure
    SYNTAX
    if(boolean_condition){
        // code block
    }else {
        // code block
    }
*/
let accountBalance = 5000;
let withdrawal = 10000;
if(withdrawal <= accountBalance){
    console.log('Transaction successful');
}else {
    console.log('Insufficient Funds');
}

// multiple if blocks
let time = 18;
if(time < 12){
    console.log('good morning');
}else if(time >= 12 && time < 17){
    console.log('good afternoon');
}else {
    console.log('good evening');
}

/*  switch/case selection structure
    SYNTAX
    switch(value){
    case value:
    case value:
    }
*/
let role = 'admin'; // possible values are 'admin', 'supervisor', 'guest'
switch (role) {
    case 'admin':
        // codes to execute when role is admin
        console.log('welcome admin');
        // break;
    case 'supervisor':
        // codes to execute when role is supervisor
        console.log('welcome supervisor');
        // break;
    case 'guest':
        // codes to execute when role is guest
        console.log('welcome guest');
        break;
    default:
        console.log('Please log in');
        
}