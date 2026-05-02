for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + j);
    }
    console.log(row);
    
    
}

/* output

A
AB
ABC
ABCD
ABCDE

*/
