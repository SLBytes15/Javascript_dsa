let num = 1634;
let count = 0;
let ans = num;
while (ans > 0) {
  ans = parseInt(ans / 10);
  count++;
}
let check = num;
let rem = 0;
while (check) {
    rem = check % 10;

    ans += (rem**count);
    check = parseInt(check/10);
}

if(ans == num){
    console.log(num + " is Armstrong Number");
    
}

// Output: 153 is Armstrong Number