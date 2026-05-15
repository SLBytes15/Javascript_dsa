// const arr = [1, 2,3];
// let k = 4;

// let run = Math.abs(arr.length - k);


// while(run > 0){
//     for (let i = 0; i < arr.length - 1; i++) {
        
//         [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
//         console.log(arr[i] + " " + arr[i+1]);
//     }
//     run--;

// }

// console.log(arr);


const rotateRight = (arr,k) => {
    let n = arr.length;
    k %= n;

    const reverse = (start,end) => {
        while(start<end){
            [arr[start],arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n-1 );

    return arr;
}



const arr = [1,2,3,4,5];
let k = 2;

console.log(rotateRight(arr,2));