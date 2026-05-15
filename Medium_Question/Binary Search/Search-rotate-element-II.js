function bs(arr, target) {
    let low = 0, high = arr.length - 1;

    
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(target == arr[mid]) return true;

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

    return false;
}


const arr = [7,8,1,2,3,3,3,4,5,6];
const target = 10;
console.log(bs(arr,target));
