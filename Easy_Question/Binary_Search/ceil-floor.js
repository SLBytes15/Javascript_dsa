// https://leetcode.com/problems/search-insert-position/description/

function solution(arr, x) {
    let n = arr.length,
    low = 0,
    high = n - 1,
    floor = n,
    ceil = 0;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] >= x) {
      floor = mid;
      high = mid - 1;
    } else {
    ceil = mid;
      low = mid + 1;
    }
  }

  return [ceil,floor];
}

const arr = [1, 2, 4, 7];
const target = 8;
console.log(solution(arr, target));