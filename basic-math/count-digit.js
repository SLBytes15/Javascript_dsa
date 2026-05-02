let num = 123452904829482409284n; 
let count = 0;

while (num > 0n) {
  num = num / 10n; 
  count++;
}

console.log(count); // Output: 21
