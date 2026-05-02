for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    for (let k = i; k <= 4; k++) {
        row += " ";
    }
    for (let l = i; l <= 4; l++) {
        row += " ";
    }
    for (let p = 1; p <= i; p++) {
        row += "*";
    }
    console.log(row);
}

for (let i = 2; i <= 5; i++) {
  let row = "";
  for (let j = i; j <= 5; j++) {
    row += "*";
  }
  for (let k = 1; k <= i-1; k++) {
    row += " ";
  }
  for (let l = 1; l <= i-1; l++) {
    row += " ";
  }
  for (let p = i; p <= 5; p++) {
    row += "*";
  }
  console.log(row);
}



/* output

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/