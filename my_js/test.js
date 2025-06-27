function nextInLine(arr, item){
    // your code
    arr.push(item)

    return item;
}

var testArr=[1,2,3,4,5];


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
// setup 1
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

//setup 2
var myPlants=[
    {
        type:"flowers",
        list:["rose","tulip", "dandelion"]
    },
    {
        type:"trees",
        list:["fir","pine","birch"]
    }
];
var secondTree=myPlants[1].list[1]; // outputs pine

// setup 3
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
        "artist": "ABBA",
        "tracks": [
            "Dancing Queen",
            "Mamma Mia",
            "Take a Chance on Me"
        ]
    },
    "4439": {
        "album": "Mike Gold",
        "artist": "Mike",
        "tracks": []
    },
    "5932":{
        "album":"Sin Cara"
    }
};


// keeep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); // fancy way of coping an object



function updateRecords(id, prop, value){
    if (value===""){
        delete collection[id][prop]
    }
    else if (prop==="tracks"){
        collection[id][prop]=collection[id][prop] || [] ;// if collection[id][prop] exist then it is equal to itself else it is an empty list
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection;
}

// example test
console.log("XXXXXXXXXXXXXX test XXXXXXXXXXXXXXXXX");
updateRecords(2468,"tracks","Test Track");
console.log(updateRecords(5439,"artist","ABBA"));