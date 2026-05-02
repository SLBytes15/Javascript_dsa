for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += `${j}`;
    }
    
    for (let k = i+1; k <= 4; k++) {
        row += " ";
        
    }
    for (let l = 3; l >= i; l--) {
        row += " "; 
    }
    for (let j = i; j >= 1; j--) {
      row += `${j}`;
    }

    console.log(row);
    
    
}


/* output

1      1
12    21
123  321
12344321

*/