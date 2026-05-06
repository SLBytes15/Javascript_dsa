function merge(arr, start, mid, end){
    

}

function mergeSort(arr,start,end){
    let mid = Math.floor((start + end)/2);
    mergeSort(arr, mid + 1, end);
    mergeSort(arr, start, mid);
    merge(arr,start,mid,end);
}



let arr = [38, 27, 43, 10];
let n = arr.length;
console.log(n);

mergeSort(arr,0,n);

