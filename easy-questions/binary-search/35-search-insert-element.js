// https://leetcode.com/problems/search-insert-position/description/

function solution(arr,x){
    let low = 0, high = arr.length - 1, ans = 0;

    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);

        if(arr[mid] >= x) {
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans;
}


const arr = [1, 2, 4, 7];
const target = 6;
console.log(solution(arr,target));


