const arr = [4, 1, 2, 1, 2];
let map = new Map()

if(arr.length == 1)  console.log(arr[0]);

arr.forEach(val => {
    map.set(val, (map.get(val) || 0) + 1)
})

for (let [key, value] of map) {
  if (value === 1) {
    result = key;
    break;
  }
}

console.log(result);
