/*
Using Boyer and Moores Majority Voting Algorithm:

https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html

Learning Point: If the hint points at a super/clever-solution - don't bother doing mediocre work that takes 10x longer to code.

Find the super-solution.
*/

var majorityElement = function(nums) {
    var maj = "NA";
    var count = 0;
    for (let inum of nums) {
        if (maj == "NA") { maj = inum; }
        (maj == inum ? count+=1 : count-=1);
        if (count == 0) { maj = "NA"; }
    }
    return maj;
};
oneA = [0,0,0,0,1,1,1,1,1];
console.log(majorityElement(oneA));
