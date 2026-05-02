for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = i; j <= 5; j++) {
    row += "*";
  }
  for (let k = 2; k <= i; k++) {
    row += " ";
  }
  for (let l = 2; l <= i; l++) {
    row += " ";
  }
  for (let p = 5; p >= i; p--) {
    row += "*";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let k = i; k <= 4; k++) {
    row += " ";
  }
  for (let l = 4; l >= i; l--) {
    row += " ";
  }
  for (let p = i; p >= 1; p--) {
    row += "*";
  }
  console.log(row);
}

/* output

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********


*/ 