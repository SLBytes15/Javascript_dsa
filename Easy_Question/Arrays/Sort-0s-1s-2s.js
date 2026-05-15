const arr = [2, 0, 2, 1, 1, 0];

let map = new Map();
let check = 0;

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
}


const sorted = [...map.keys()].sort((a,b) => a-b); // spread operator 
let j = 0;

sorted.forEach((key) => {
    let count = map.get(key);
    for (let i = 0; i < count; i++) {
            arr[j] = key;
            j++;
    }
})

console.log(arr);

