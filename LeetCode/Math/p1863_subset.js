/*For this problem, note the following two facts:

For this one, we need to iterate all possible subsets and compute the XOR as we go along. Lets get started.

I normally prefer a recursive solution, but imperatively to generate all subsets is very straightforward.

a,b,ac,bc,c,acd,bcd,cd,....etc.

Nice hack to avoid JSON library deep copies:
temp = [...ssArr[j], nums[i]];

I could not submit this one as [3,2,3] failed in its test.
However, when I tested the function in browser it gave teh correct result. Leetcode's
version of javascript might be a bit wonky ??
}

*/

var subsetXORSum = function(nums) {
    if (nums.length == 1) { return nums[0]; }
    if (nums.length == 2) { return (nums[1]^nums[0]) + nums[1] + nums[0];}

    const ssArr = [[nums[0]] , [nums[1]], [nums[0],nums[1]]];
    let xorSum = (nums[1]^nums[0]) + nums[1] + nums[0];
    let temp; let bound;

    for (let i = 2; i < nums.length; i++) {
        bound = ssArr.length //This will change in j-loop, so fix now!
        ssArr.push([nums[i]]);
        xorSum+=nums[i];
        for (let j = 0; j < bound; j++) {
            temp = [...ssArr[j], nums[i]];
            ssArr.push(temp);
            xorSum+=temp.reduce((sum,val) => {return sum=sum^val;},0);
        }
    }
    console.log(ssArr);
    return xorSum;

};

subsetXORSum([3,2,3]);

/* Corner Cases Check:
- Empty List -OK
- Number > 20 - OK
- Number < 1 - OK

Test Cases:
[2]
[1,3]
[5,1,6]
[3,4,5,6,7,8]
[1,2,3,4,5,6,7,8,9]
[3,2,3]
*/
