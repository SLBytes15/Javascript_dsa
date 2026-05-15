let a = 7, b = 10;

let xor = a ^ b;
let count = 0;

while(xor > 0){
    xor &= (xor-1); 
    count++;
    console.log(xor);
}

console.log(count); // Output = 3
