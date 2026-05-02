for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let k = 1; k <= i+1; k++) {
    row += " ";
  }
  for (let l = i; l <= 4; l++) {
    row += "*";
  }
  for (let j = i; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}


/* output
  *********
   *******
    *****
     ***
      *
*/