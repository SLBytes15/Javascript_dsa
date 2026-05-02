for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
        row += String.fromCharCode(70-j);   
    }
    console.log(row);
    
    
}

/* output

E
DE
CDE
BCDE
ABCDE

*/
