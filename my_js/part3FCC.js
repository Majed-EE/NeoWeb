// part 3 arrow function extension
// map filter and reduce
// when one function take another function as arguemnt; that is a good time to use arrow function
const realNumberArray= [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList=(arr)=> {
    // can search filter and map function
    const squaredIntegers=arr.filter(num=> Number.isInteger && num>0).map(x=>x*x);
     // result of this filter command will be an array with only int>0 numbers then map the function to square of the number
    return squaredIntegers;
};

const squaredIntegers=squareList(realNumberArray);
console.log(squaredIntegers)


// write higher order arrow functions

const increment=(function(){
    return function increment(nukber, value=1){
        return number+value;
    }
})();
// what is happening in the above case
// The IIFE Wrapper
// (function() { ... })()
// This is an Immediately Invoked Function Expression (IIFE).
// It defines and runs instantly, returning the inner increment function.

console.log(increment(5,2));
console.log(increment(5)); 

// use the rest operator with function parameters -> allows you to take variable number of arguments
// most viewed
const sum= (function(){
    return function sum (...args){ // rest function sum(x,y,z)=sum (...args) -> everything in sum(a1a2) gets converted to list
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3))


// spread operator 
const arr1=["JAN",'FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2=arr1;
    arr1[0]='potato'

}
)();
console.log(arr2)

// Destructuring Assignment
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// Traditional variable assignment
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

// Destructuring assignment with renaming
const { x : a1, y : b1, z : c1 } = voxel; // a = 3.6, b = 7.4, c = 6.54
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // Solution using destructuring:
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // Output: 79
const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x); // Output: 1 2

// Variable swap with destructuring
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]; // Swaps values
})();

// 3:06:39 Template Literals
const person={
    name:"zodiac Hasbro",
    age:56
};
const greeting=`Hello, my name is ${person.name}! 
I am ${person.age} years old`;

console.log(greeting);
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
    return resultDisplayArray;
}

// Expected output for makeList(result.failure):
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
// 3:10:43 Simple Fields

// 3:12:24 Declarative Functions

// 3:12:56 class Syntax

// 3:15:11 getters and setters

// 3:20:25 import and export