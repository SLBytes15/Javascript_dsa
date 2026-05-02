let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    // Check if we are on the boundary
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    } else {
      row += " "; // Empty space for the middle
    }
  }
  console.log(row);
}


/* output

****
*  *
*  *
****

*/