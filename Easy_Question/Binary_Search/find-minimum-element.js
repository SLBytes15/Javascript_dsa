function bs(arr) {
    let low = 0, high = arr.length - 1;

    while(low < high){
        let mid = low + Math.floor((high - low)/2);

        if(arr[mid] > arr[high]){ // right part is minimum
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    return arr[low];
}

const arr = [4,5,6,7,0,1,2,3];
console.log(bs(arr));
