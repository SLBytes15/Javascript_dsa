let arr1 = [1,2,3,4,5];
let arr2 = [6,7,7,7,8,9];

let st = new Set([...arr1,...arr2]);

let arr = Array.from(st).sort((a,b) => a - b);
console.log(arr);
// 

// Two pointers

let union = [];

for (let i = 0; i < array.length; i++) {
    if(arr1[i] < arr2[i]) union.push(arr1[i]);
    
}