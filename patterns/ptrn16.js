for (let i = 1; i <= 5; i++) {
    let row = "";
    let count = 0;
    for (let j = i; j <= 5; j++) {
        row += String.fromCharCode(65+count);
        count++;
    }
    console.log(row); 
}


/* output

ABCDE
ABCD
ABC
AB
A

*/
