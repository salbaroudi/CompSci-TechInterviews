/*
To find the town judge, treat relations as votes.
Those who trust someone get -1, those that get trusted gain +1.

(1) As the judge trusts nobody, but (2) is trusted by everyone else, his score must be (n-1).
Note that the problem indicates that only one person can have such a score (unique).

These two conditions necessitate a maximal score, given our summation scheme.

So we will pick out the judge everytime.

Learning Point:
- I forgot a corner case! n=1 with []. I didn't handle this. Always read constraints and test carefully.
- Solution is 99% on memory, but only 35% on speed. How much faster can one go?
- Other participants don't use the indexOf() method - they use a manual for loop to find the element,
as verified by: https://leetcode.com/problems/find-the-town-judge/discuss/1304298/JavaScript-99-faster


*/
var findJudge = function(n, trust) {
    if (n == 1) { return 1;}

    let netArr = new Array(n+1).fill(0);

    for (let relation of trust) {
        netArr[relation[0]]-=1;
        netArr[relation[1]]+=1;
    }

    return netArr.indexOf((n-1))
};
