function lowerBound(arr,x) {
    let n = arr.length;
    let low = 0; high = n-1;
    let ans = n;
    while (low <= high) {
      let mid = low + Math.floor((low - high) / 2); // Middle index

      if (arr[mid] >= x) {
        ans = mid; // Store possible index
        high = mid - 1; // Move left
      } else {
        low = mid + 1; // Move right
      }
    }
    return ans;
}


const arr = [3, 5, 8, 15, 19];
console.log(lowerBound(arr,3));


