function bs(arr,target) {
    let low = 0, high = arr.length - 1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(target == arr[mid]) return mid;

        if(arr[low] <= arr[mid]){ // left is sorted
            if(arr[low] <= target && target < arr[mid]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }
        else{ // right is sorted
            if(arr[low] <= target && target <= arr[high]){
                    low = mid + 1;
            } else{
                high = mid - 1;
            }
        }
    }
    return -1;
}

const arr = [4,5,6,7,1,2,3];
const target = 3;
console.log(bs(arr,target));

