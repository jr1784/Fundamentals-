/*
 *Conditionals, Functions, Scope and Loops.
 */
/*
//
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 7;

//Less than
let lessThan  = 2 < 10;

//Greater Than Equals
let greaterThanEq = 5 >= 5;

//Less than
let lessThanEq = 4 <= 9;

//Not equals
let notEquals = 5 !== 5;
*/

/*
let storeA = 4.90;
let storeB = 4.90;



function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.");
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
//compareStorePrices(10, 8);
//compareStorePrices(5,25);

function squareNum (number){
    return number * number;
}
let squaredNum = squareNum (4);
console.log(squaredNum);
*/

/*
let x = 10;

function addNumber (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b)
    return n + m;
}
addNumber(1,2,10);
*/

/*
              //0,1,2,3,4
let ourArray = [1,2,3,4,5,7,8,9,10,11];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j <= 3; j++) {
        console.log('J is equal to: ' + j);
    }
}
 */

let x = 5;
while (x < 10) {
    console.log('Ran');
    x = x+1;
}