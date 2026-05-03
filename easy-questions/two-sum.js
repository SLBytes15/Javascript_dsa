

let nums = [2,3,4,5];
let add = 0;
let target = 9;

let ans = [];

for (let i = 0; i < nums.length; i++) {
    let value = i;
    for (let j = i+1; j < nums.length; j++) {
        let check = (nums[j] + nums[value]);
        if( check == target){  
            console.log([value,j]);
            

    } 
            
}}

console.log([]);


