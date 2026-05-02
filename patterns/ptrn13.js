let count = 1;
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += `${count}`;
        count++;
    }
    console.log(row);
}


/* output

1
23
456
78910
1112131415

*/