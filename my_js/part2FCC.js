var myArray=[];
var i=0;
while(i<5){
    myArray.push(i);
    i+=1;
}

var ourArray=[]
for (var i=0;i<5;i++){
    ourArray.push(i);
}
console.log(myArray);
console.log(ourArray)

// iterate over the content of the array 

for (var i=0;i<ourArray.length;i++){
    console.log(ourArray[i])
}


// profile lookup
var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "1234567890",
        "likes": ["Pizza", "Goding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "Unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function loopUpProfile(name, prop){
    for (var i=0;i<contacts.length;i++){
        if (contacts[i].firstName===name){
            return contacts[i][prop] || "No such property";

        }else {
            return "No such contact";
        }
    }

}

var data=loopUpProfile("Akira","likes");
console.log(data)
// check parseInt function


// ternary operator
// condition ? statement-if-true :statement-if-false;

function checkEqual(a,b){
    return a===b ? "it is true" : "it is false"
}

console.log(`check if 1 =6 ${checkEqual(1,6)}`)


// check scope-> var vs let vs const

function checkScope() {
    let i = "function scope"; // Outer scope
    if (true) {
        let i = "block scope"; // Inner scope (new variable)
        console.log("Block scope i is: ", i); // "block scope"
    }
    console.log("Function scope i is: ", i); // "function scope"
}

// Strict Mode ("use strict"):
// Enforces stricter parsing (e.g., prevents undeclared variables).
// Doesn’t affect the scoping behavior here but is good practice.


// try and cath 
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = Object.freeze({
        PI: 3.14
    });

    try {
        MATH_CONSTANTS.PI = 99; // Throws TypeError in strict mode
    } catch(ex) {
        console.log(ex); // Logs the error
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI); // 3.14 (unchanged)



// short cut to write function

var magic= function(){
    return new Date();
}
// to call the above function you write magic()

// the above is called annonymus function. we can short it
// converting to arrow function
magic = () => new Date();// what does new do here
console.log(magic()); 


// equivalent to this function is 
// var myConcat= function(arr1,arr2){
//     return arr1.concat(arr2);
// };

var myConcat=(arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]))

