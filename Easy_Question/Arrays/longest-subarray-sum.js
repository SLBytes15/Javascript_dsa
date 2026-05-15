const arr = [10, 5, 2, 7, 1, 9];
let target = 15;
let sum = [];
let count = 0;

arr.sort((a,b) => b-a);

while(target > 0){
for (let val of arr) {
  while (target >= val) {
    count++;
    target -= val;
    sum.push(val);
    break;
  }
}
}


console.log(sum);



