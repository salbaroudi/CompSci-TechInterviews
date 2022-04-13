/*
First Attempt: Print out the tree
Second Refinement: Pass an array (by ref) to record the nodes correctly.
Third Refinement: Base Cases and Testing.

Solution is very fast (98%), and average on memory usage (48%).

Learning Points:
- In order to do DFS, you can use a stack, or perform the loop below.
- Read the question more carefully...was trying to do recursion on the raw
- input list. That would have been very painful to figure out.

- A very clever solution to your two arg recursion, is to you closure and
and inner funciton, to populate the return array, as seen here:

https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/291542/two-solutions-JavaScript

This reduces our recursion to just one argument, and avoids the "arranging return values" hang-ups I have
with recursion sometimes.
*/

//Attempt 3: Base and Corner Cases, refinement
var po2 = function(node,tArr) {
    tArr.push(node.val)
    for (let child of node.children) {
        po2(child,tArr);
    }
}

var preorder = function(root) {
    if (root == null) {return [];}
    let tArr = [];
    po2(root,tArr);
    return tArr;
};

oneA = [1,null,3,2,4,null,5,6];


/*
[]
[1]
[1,null,2,3]
[1,null,3,2,4,null,5,6]
[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
*/
