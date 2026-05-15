
let array = [15,13,2,5];
let count = 0;

for (let i = 0; i < array.length-1 ; i++) {
    console.log("i = " + i);
    
    for (let j = i+1; j < array.length ; j++) {
        console.log("j = " +j);
        
        if(array[j] < array[i]){
            console.log(array[i] + " " + array[j]);
            [array[i], array[j]] = [array[j], array[i]];
            console.log(array[i] + " " + array[j]);

        }
        console.log(array);
        
        
    }
    
}


console.log(array);
