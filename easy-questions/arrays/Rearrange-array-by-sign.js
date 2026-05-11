const arr = [3, 1, -2, -5, 2, -4];
let result = new Array(arr.length);
let posindex = 0;
let negindex = 1;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        result[posindex] = arr[i];
        posindex += 2;
    }else if(arr[i] < 0){
        result[negindex] = arr[i];
        negindex += 2;
    }   
}


console.log(result);
