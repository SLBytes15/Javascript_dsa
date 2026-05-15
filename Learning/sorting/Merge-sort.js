function merge(arr, start, end, mid){

    let left = start, right = mid + 1;
    let result = [];

    while(left <= mid && right <= end){

        if(arr[left] <= arr[right]){
            result.push(arr[left++]);
        }
        else{
            result.push(arr[right++]);
        }

        while(left<=mid){ result.push(arr[left++]);}
        while(right<=end){ result.push(arr[right++]);}

        for (let i = start; i <= end; i++) {
            arr[i] = result[i -start];
        }

        // console.log(arr);
    }
    return result;

}




function mergeSort(arr, start, end){

    if(start >= end)return; 

    let mid = Math.floor((start + end)/2);

    // console.log("start = "+start);
    // console.log("mid = "+ mid);
    mergeSort(arr,start, mid);

    // console.log("mid = "+(mid+1));
    // console.log("end = "+ end);
    mergeSort(arr,mid + 1, end);

    merge(arr,start,end, mid);
}


let arr = [4,2,3];
let n = arr.length -1;

mergeSort(arr,0,n);




