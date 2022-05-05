/*
Simple enough problem. Just use a hash map to keep track of things, and pick out elements
as they appear nums.length times. We sort the array as asked, in the return line.

Double loop runs in O(n) time, as each element in the sub-arrays is only touched
once.

Code could be a bit faster / more efficient if Map() structure was not used.
But code is very neat. And Map was constructed for these kinds of problems.
*/

var intersection = function(nums) {
    const intMap = new Map();
    const intArr = [];
    for (let arr of nums) {
        for (let val of arr) {
            if (!intMap.has(val)) { intMap.set(val,1); }
            else {
                intMap.set(val,(intMap.get(val)+1))
            }
            if (intMap.get(val) == nums.length) { intArr.push(val); }
        }
    }
    return intArr.sort((a,b) => a-b);
};

var intersection = function(nums) {
    const intMap = new Map(); const intArr = [];
    for (let arr of nums) {
        for (let val of arr) {
            (!intMap.has(val))?intMap.set(val,1):intMap.set(val,(intMap.get(val)+1));
            (intMap.get(val) == nums.length)?intArr.push(val):null;
        }
    }
    return intArr.sort((a,b) => a-b);
};


/* Corner Cases Check:
- empty array - OK
- out of range subarray values -ve - OK
- out of range subarray values +ve - OK
-non unique numbers in subarrays - OK
- duplicate subarrays - are allowed!


Test Cases:
[[1]]
[[1],[2],[3]]
[[1,2,3],[1,3,2],[3,2,1]]
[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
[[1,2,3],[4,5,6]]
[[3,1,2,5,6,8,4,99,43,10],[1,2,3,22,33,44,55,66,77,4,10],[3,4,5,33,44,55,66,77,88,99,6,10]]
[[3,1,2,5,22,33,44,55,66,77,88,99,6,8,4,43,10],[1,2,3,22,33,44,55,66,77,4,10],[3,4,5,33,44,55,66,77,88,99,6,10,12,34,45,56,67,78,98]]
[[5,4,3,2,1],[3,2,1],[4,3,2,1]]


*/
