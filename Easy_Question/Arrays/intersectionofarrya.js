var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const result = [];

    for(const num of nums2){
        if(set1.has(num)){
            result.push(num);
            set1.delete(num);
        }
    }
    return result;
};
console.log(intersection([5,6,7,3], [5,7,3,1]));