let k = 2;

for (let i = 2; i < nums.length; i++) {
  if (nums[i] !== nums[k - i]) {
    nums[k] == nums[i];
    k++;
  }
}

console.log(k);
return k;

// for(let i = 1; i < nums.length; i++){
//     if(nums[i] === nums[i-1])
//     {
//         count++;
//         if(count > 2){
//             nums.splice(i,1);
//             count--;
//             i--;
//         }else{
//             count = 1;
//         }

//     }

// }
