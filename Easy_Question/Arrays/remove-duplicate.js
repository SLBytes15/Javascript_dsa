let arr = [1,1,1,1,2,2,2,2,3,3,3,3];

let j = 0;

for (let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[j])
        arr[++j] = arr[i];
}

console.log(j+1);
