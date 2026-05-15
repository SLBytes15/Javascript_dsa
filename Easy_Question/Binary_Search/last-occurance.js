//Brute Force
function lastOccurance(arr,x){
    let focc = 0, locc = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x){
            if(focc < 1) focc = i;
            if(locc < i) locc = i;
        }
    }
    if(focc != 0) return [focc,locc];
    return -1;
}

const arr = [3, 4, 13, 13, 13, 20, 40];
const x = 13;
console.log(searchRange(arr,x));


// Optimal Approach
g




