// const arr = [1, 2, 0, 1, 0, 4, 0];
// const val = 0;
// let i = 1, k = 1;

// for(let i = 0; i < k; i++){
//      for (let j = 0; j < arr.length - 1; j++){
//        if (arr[j] == val) {
    //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    //         // console.log(arr[j] + " " + arr[j+1]);
    //         k++;
    //         continue;
    //        }
    //        k--;
    //      }
    // }
    // // for (let i = 0; i < k; i++) {
        
    // // }
    // console.log(arr);
    
    
    const arr = [1, 2, 0, 1, 0, 4, 0];
    const val = 0;
    
    let pos = 0; // Tracks where the next non-zero element should go
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            // Swap the current non-zero element with the element at 'pos'
            console.log(arr[pos] + " " + arr[i]);
            [arr[pos], arr[i]] = [arr[i], arr[pos]];
            console.log(arr[pos] + " " + arr[i]);
    pos++;
  }
}

console.log(arr); // Output: [1, 2, 1, 4, 0, 0, 0]
