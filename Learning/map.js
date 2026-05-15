// let map = new Map();

const { log } = require("node:console");

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map.get(1));
// console.log(map.get('1'));

// console.log(map.size);



// chaining

// map.set('1','str1').set(1,'num1').set(true,'bool1');

// Iteration over map

// map.keys();
// map.values();
// map.entries();

let map = new Map([
    ['cucumber', 500],
    ['tomatoes',350],
    ['onion',50]
]);

for(let vegetables of map.values()){
    // console.log(vegetables);    
}

//built-in forEach 

map.forEach((value,key,map) => {
    // console.log(key + value);  
})


// Objects.entries : conversts obj to iterable array  
// to convert obj to map 

let obj = {
    name: "alice",
    age: 19
};

let map3 = new Map(Object.entries(obj));

// console.log(map3.has('name'));

// Object.fromEntries

let price = Object.fromEntries([
    ['apple', 1],
    ['banana',2],
    ['zuchini',3]
])

// console.log(price.apple);


const obj1 = { '':5, b:7, c:9};

Object.entries(obj1).forEach(([key,value]) => {
    // console.log(key + value);
    
})

const entries = new Map([
    ["name" , "alice"],
    ["age", 19]
]);

// console.log(Object.fromEntries(entries));

// Object.fromEntries : convert map to an object
// also converting of array to an object 


// Object transformation
const object = { a: 1, b: 2, c: 3};

const object2 = Object.fromEntries(Object.entries(object).map(([key,val]) => [key, val*3]));

console.log(object2);



// Task

function unique(arr) {
    return Array.from(new Set(arr));
    }



let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log( unique(values) ); // Hare, Krishna, :-O
