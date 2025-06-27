function nextInLine(arr, item){
    // your code
    arr.push(item)

    return item;
}

var testArr=[1,2,3,4,5];

console.log("hi")
console.log("before: "+JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr))


// javascript objects

// Example 

var testDog={
    "name": "caper",
    "legs":4,
    "tails":1,
    "friends":["everything"]
};

// Accessing objects
var dogName=testDog.name; // or testDog["name"]
var doglegs=testDog.legs;

function checkObj(checkProp){
    if (testDog.hasOwnProperty(checkProp)){
        return testDog[checkProp];
    } else{
        return "not found"
    }
}
console.log(checkObj("name"))

// accessing nested object
//
var myStorage={
    "car":{
        "inside":
            {
            "glove box":"maps",
            "passenger seat": "crumbs" 
        },
        "outside":
        {
        "trunk":"jack"
        }

    }
};

var gloveBoxContents= myStorage.car.inside["glove box"];
console.log(`var is ${gloveBoxContents}`);