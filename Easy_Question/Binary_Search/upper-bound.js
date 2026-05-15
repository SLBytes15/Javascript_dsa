function lowerBound(arr, x) {
 let low = 0, high = arr.length - 1;
        let ans = arr.length; // Default to array length if no upper bound found

        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);

            if (arr[mid] > x) {
                ans = mid;       // Store current index
                high = mid - 1;  // Move left
            } else {
                low = mid + 1;   // Move right
            }
        }
        
        return ans;
}

const arr = [3, 5, 8, 15, 19];
console.log(lowerBound(arr, 9));
