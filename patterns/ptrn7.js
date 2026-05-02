for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let k = 7; k >= i; k--) {
        row += " ";   
    }
    for (let l = 2; l <= i ; l++) {
        row += "*"
        
    }
    for (let j = 1; j <= i ; j++) {
        row += "*";
    }
    console.log(row);   
}

/* output
       *
      ***
     *****
    *******
   *********
*/