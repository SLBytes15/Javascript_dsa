let search = function(arr,checkfor){
    
    let n = arr.length - 1;
    let start = 0;
    let end = n;

    while(start <= end){
        let middle = Math.floor((start + end)/2);

        if(arr[middle] == checkfor)
        {
             return middle;
        ;}

        if(arr[middle] < checkfor){
            start = middle + 1;
        }else{
            end = middle - 1;
        }
    }
}


let arr = [1, 2, 3, 6, 7, 9, 15, 23, 34, 57];
let checkfor = 57;

console.log(search(arr,checkfor));