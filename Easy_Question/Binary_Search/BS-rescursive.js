function binarySearch(arr, target){

    let n = arr.length;
    let low = 0, high = n-1;

    while(low <= high){
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] === target) return mid;
        else if(target > arr[mid]) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
}


const arr = [3, 4, 6, 7, 9, 12, 16, 17];
console.log(binarySearch(arr,9));