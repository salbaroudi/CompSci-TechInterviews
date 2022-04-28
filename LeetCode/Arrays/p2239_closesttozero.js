/*
Learning Point:

- There is an object distinction between -0 and +0 in javascript,
however for test statements they evaluate to be the same (see: https://stackoverflow.com/questions/7223359/are-0-and-0-the-same)

For our else statement, val=-0 and big=0 will fail, but because we already have big as zero, it doesn't matter!
*/

//Attempt 1: Basic Imperative Loops
var findClosestNumber = function(nums) {
    let big = 100001;
    for (let val of nums) {
        if (Math.abs(val)<Math.abs(big)) { big = val; }
        else if (Math.abs(val)==Math.abs(big)) { big=Math.max(big,val); }
    }
    return big;
};

var findClosestNumber = function(nums) {
    let big = 100001;
    for (let val of nums) {
        if (Math.abs(val)<Math.abs(big)) { big = val; }
        else if (Math.abs(val)==Math.abs(big)) { big=Math.max(big,val); }
    }
    return big;
};
findClosestNumber([-4,-2,1,4,8]);

/* Corner Cases Check:
- empty array - OK
- outside range +ve - OK
- outside range -ve - OK
- minus zero - Failed! But should have succeeded.
- decimal value - OK

Test Cases:
[-4,-2,1,4,8]
[2,-1,1]
[1,-1]
[-1,1]
[1,0,-1]
[1,1,-0]
[-1,1,0,-0]
[-0,0]
[1,2,3,4,5,6,7,1,3,65,-5,-2,-1,0]
[1,2,3,4,5,6,7,1,3,65,-5,-2,-1,0,-0]
*/
