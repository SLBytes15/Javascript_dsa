const romanMap = [
  { val: 1000, sym: "M" },
  { val: 900, sym: "CM" },
  { val: 500, sym: "D" },
  { val: 400, sym: "CD" },
  { val: 100, sym: "C" },
  { val: 90, sym: "XC" },
  { val: 50, sym: "L" },
  { val: 40, sym: "XL" },
  { val: 10, sym: "X" },
  { val: 9, sym: "IX" },
  { val: 5, sym: "V" },
  { val: 4, sym: "IV" },
  { val: 1, sym: "I" },
];

let num = 3749
let result = "";

for(let items of romanMap){
    while(num >= items.val){
        result += items.sym;
        num -= items.val;
        console.log(num);
        
    }
}

console.log(result);
