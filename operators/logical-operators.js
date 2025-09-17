// Logical AND (&&)
let age = 2;
let bal = 300;
// can only reg if adult with  bal >= 500
let eligible = age >= 18 && bal >= 500;
console.log(eligible);

let secondEligible = age >= 18 || bal >= 500;
console.log('second', secondEligible);

let negate = !secondEligible;
console.log('negate', negate);

/*  FALSE FAMILY
    null, undefined, 0, false, '', NaN
*/

/*  TRUE FAMILY
    anything not in the false family */

let defaultTheme = 'blue';
let userTheme = 'green';

let appliedTheme = userTheme || defaultTheme;
console.log('applied theme', appliedTheme);
