let arr = [4,57,68,12,79];
let max = 0;

for (let i = 0; i < arr.length; i++) {
    let check = Math.max(arr[i],arr[i+1]);
    if(check > max){ max = check;}
}
console.log(max);

