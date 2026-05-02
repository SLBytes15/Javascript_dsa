for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let k = i; k <= 4; k++) {
        row += " ";
    }
    
    for (let j = 2; j <= i; j++) {
        row += String.fromCharCode(63+j);    
    }
    for (let l = i; l >= 1; l--) {
        row += String.fromCharCode(64+l);
        
    }
    console.log(row);
}


/* output

    A
   ABA
  ABCBA
 ABCDCBA

 */

 