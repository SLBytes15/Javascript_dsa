// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const prices = [7, 6, 4, 3, 1];

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let j = 0;

for (let i = 0; i < prices.length; i++) {
    if( j > i ) console.log(0);
    ;

    if(max < prices[i+1] && i > j){
        max = prices[i+1];
    }
    if( min > prices[i] && j < i){
        min = prices[i];
        j++;
    }

    if(j > i);
}

console.log(min,max);
