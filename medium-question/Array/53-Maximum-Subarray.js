// https://leetcode.com/problems/maximum-subarray/description/

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Using Kadane's Algorithm

/* Brute Force

const target = 6;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[i];
        console.log(arr[j]);
        if(sum === target) {
            console.log(`${i} to ${j}`);
            return;
        }
    }
}

*/

// Better Approach
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
let start = 0;
let tempStart = 0;
let end = 0;
let result = [];

for (let i = 0; i < arr.length; i++) {


    sum += arr[i];
    // result.push(arr[i]);

    if (sum > max) {
        max = sum;
        start = tempStart;
        end = i;
        result.push(i);
    }

    if (sum < 0) {
        sum = 0;
        result = [];
        tempStart = i + 1;
        result.push(arr[i+1]);
    }
}


console.log(max, result);


