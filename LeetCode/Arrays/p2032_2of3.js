
/* To iterate all over the elements, we have to traverse/merge the arrays in
some way, which is O(n) time.

Why not build a hash table as we are going along?

*/


var twoOutOfThree = function(nums1, nums2, nums3) {
    let numsMap = new Map();
    for (let val of nums1) { numsMap.set(val,[1,0,0]); }

    for (let val of nums2) {
        (numsMap.has(val))?numsMap.get(val)[1]=1:numsMap.set(val,[0,1,0]);
    }

    for (let val of nums3) {
        (numsMap.has(val))?numsMap.get(val)[2]=1:null;
    }

    const storeArr = []; let sum;
    for (let [key,val] of numsMap) {
        sum = numsMap.get(key).reduce((a, b) => a + b, 0);
        (sum>=2)?storeArr.push(key):null;
    }
    return storeArr;
};



/*Corner Cases Check:
- empty arrays: OK
- numbers out of range -ve: OK
- numbers out of range +ve: OK

Test Cases:
[1]
[2]
[3]
[1]
[2]
[1]
[1]
[1]
[1]
[1,1,3,2]
[2,3]
[3]
[3,1]
[2,3]
[1,2]
[1,2,2]
[4,3,3]
[5]
[1,2,3,4,5,6,7,8,9]
[1,2,3,5,6,7,8,9,10]
[1,2,3,4,5,6,9,10]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20]
[1,2,3]
[4,5,6,77,88,99,11,22,33,44]
[1,2,3,4,5,6,7,8,9,10]

*/
