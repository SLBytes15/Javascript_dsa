function bs(arr){
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high-low)/2);
        if(arr[mid] > arr[high]){
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    return low;
}

const arr = [4,5,6,7,1,2,3];
console.log(bs(arr));
