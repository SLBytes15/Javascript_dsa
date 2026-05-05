let dummy = new ListNode(0);
let carry = 0;
let current = dummy;


while(l1 != null || l2 != null || carry > 0){

    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

     let sum = val1 + val2 + carry;
     carry = Math.floor(sum / 10);
}

for (let i = 0; i < size; i++) {
    let sum = 0;
    sum += l1[i] + l2[i];
    console.log(sum);
    sum += carry;

   

    if (sum > 9) {
        sum = sum % 10;
      ans.push(sum);
      if(carry == 1){continue;}
      carry++;
      continue;
    }

     if(carry == 1){
        carry--;
    }

    if(isNaN){
        sum = 0;
    }

    ans.push(sum);
    
    
    // you can't equal NaN 
    
    
    
    // console.log(size);
    
}

console.log(ans);


// using Linked List



var addTwoNumbers = function(l1, l2) {

let dummy = new ListNode(0);
let current = dummy;
let carry =0;

while(l1 != null || l2 != null || carry > 0){

    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    sum = val1 + val2 + carry;
    carry = Math.floor(sum/10);

    current.next = new ListNode(sum%10);
    
    current = current.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
}

return dummy.next;


};

