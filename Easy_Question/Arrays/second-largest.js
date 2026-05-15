let num = [1, 7, 7, 7, 7, 5]; 
const arr = [...new Set(num)]; 

let index = 0;


for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
    }
}

console.log(arr[arr.length-2]);







