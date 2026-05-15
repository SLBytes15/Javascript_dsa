const arr = [-1, 0, 3, 6];  ;

for (let i = 0; i < arr.length-1; i++) {
    let temp = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = temp;
}

console.log(arr);
