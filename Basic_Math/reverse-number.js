let num = 12345n;
let rem = 0;
let ans = "";

while(num){
    rem = num % 10n;
    num = num / 10n;
    ans += `${rem}`;
}

console.log(ans); // Output: 54321
