let num = 1221;
let n = num;
let rem = 0;
let ans = "";

while (num) {
  rem = num % 10;
  num = parseInt(num / 10);
  ans += `${rem}`;
}

if(parseInt(ans) === n){
    console.log(`${ans} is Palindrome`); 
}

