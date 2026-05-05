const map = [
        {num : 1, char : null},
        {num : 2, char : ['a','b','c']},
        {num : 3, char : ['d','e','f']},
        {num : 4, char : ['g','h','i']},
        {num : 5, char : ['j','k','l']},
        {num : 6, char : ['o','n','m']},
        {num : 7, char : ['p','q','r','s']},
        {num : 8, char : ['t','u','v']},
        {num : 9, char : ['w','x','y', 'z']},
        {num : 0, char : null},
    ]

let num = parseInt("23");
let arr = [];

while (num) {
    let n = num % 10;
    arr.push(n); 
    num = Math.floor(num / 10);
}

let result = [];


for(let items of arr){
    

}

console.log(arr);


// let sum = l1.flatMap(char1 => l2.map(char2 => char1 + char2))
// console.log(sum);

