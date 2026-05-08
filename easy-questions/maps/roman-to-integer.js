const map = {
"I"  :           1,
"V"   :         5,
"X"  :          10,
"L"   :          50,
"C"   :          100,
"D"   :          500,
"M"   :          1000
}


let str = "IV";
let total = 0, currvalue= 0, prevvalue= 0;

for(let i = str.length-1; i>=0 ; i--){
    currvalue = map[str[i]];

    if(currvalue < prevvalue){
        total -= currvalue;
    }
    else{
        total += currvalue;
    }
    prevvalue = currvalue;
}

console.log(total);

