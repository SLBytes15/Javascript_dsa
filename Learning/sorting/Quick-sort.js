
function partition(arr,low,high){

    let pivot = arr[high];

    // Initialize i
    let i = low - 1;

    // Traverse array
    for (let j = low; j < high; j++) {
      // If current element <= pivot
      if (arr[j] <= pivot) {
        // Move i and swap
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // Place pivot at correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Return pivot index
    return i + 1;
}


function quickSort(arr,start,end){

    if(start <= end){
        let pivot = partition(arr,start,end);

        quickSort()
    }

}





let arr = [9,7,4,3,1];

console.log(quickSort(arr,0,arr.length-1));






