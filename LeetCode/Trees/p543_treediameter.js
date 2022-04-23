/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
Facts about the problem:
1) Any longest path (maximum diameter) MUST include leaves.
    Proof: Suppose there are two internal nodes that have a maximum path.
    We can extend the maximum path by adding child internal nodes + leaves.
    Thus, two internal nodes cannot make up a maximum path.
2) Longest path does not need to include the root => consider a lopsided tree.
3) The maximum depth of a sub-tree serves as an upper bound on the length of different branches.
3b) Thus, if we have two sub trees (L,R), and |L| > |R|, either
   (i) Subtree L + Root + R is the longest path.
   (ii) Only subtree L contains longest paths.

The right tree alone cannot contain the longest path.

Our algorithm:
1) Starting at root, find the maximum depth for tree L and tree R.
2) If L > R:
     store "max solution" in closure array.
     run depth algorithm on subtree.
3) Same behaviour for R tree, if it is the largest.
*/

/*Learning Points:
I tried to adapt my max depth function to solve this one quickly. Because the counting of diameter/depth differs slightly, this led to odd test case failures. I had to rework things more then I thought. The problems were similar, but I had to check base cases and logic carefully, and make tweaks.

Using code from a similar problem does not always mean you can solve things quickly!

*/

var maxPathDepth = function(root) {
    var treeDive = function (node,level) {
        if (!node) { return level; }
        if ((!node.left) && (!node.right)) { return level; }
        level+=1;
        let lDepth = treeDive(node.left,level);
        let rDepth = treeDive(node.right,level);

        return (lDepth >= rDepth)? lDepth : rDepth;
    };
    return treeDive(root,0);
};

var diameterOfBinaryTree = function(root) {
    let maxLF = 0;
    let currMaxL = 0;
    let lDepth;
    let rDepth;

    while(root) {
        lDepth = 0; rDepth=0;
        if (root.left) { lDepth = maxPathDepth(root.left)+1; }
        if (root.right) { rDepth = maxPathDepth(root.right)+1; }
        currMaxL = lDepth+rDepth;
        if (currMaxL >= maxLF) {
            maxLF = currMaxL;
            root=(lDepth >= rDepth)?root.left:root.right;
        } else { break; }
    }
    return maxLF;
};


/* Corner Cases Check:


Test Cases:
[1]
[1,2]
[1,2,3]
[1,2,3,4]
[1,2,3,4,5]
[5,6,7,null,null,null,null]
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[50,null,54,98,6,null,null,null,34]
[50,null,54,98,6,null,null,12,34]


*/
