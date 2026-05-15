const arr = [1, 1, 1, 2, 1, 2];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
}

let major = 0;
let ans = 0;

map.forEach((value,key) => {
    if(major < value){
        major = value;
        ans = key;
    }
})
console.log(ans);