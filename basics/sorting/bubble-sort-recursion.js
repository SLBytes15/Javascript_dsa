function bubbleSort(array,n){


    if(n < 2) return;

    for (let j = 0; j < n; j++) {

        if (array[j + 1] < array[j]) {
        //   console.log("to Swap = " + array[j] + " " + array[j + 1]);
         [array[j + 1], array[j]] = [array[j], array[j + 1]];
        //   console.log("Solved = " + array[j] + " " + array[j + 1]);
        }
    }
    console.log(array);


    return bubbleSort(arr ,n-1);
}


let arr = [10,9,8,7,4];
console.log(bubbleSort(arr,arr.length));

