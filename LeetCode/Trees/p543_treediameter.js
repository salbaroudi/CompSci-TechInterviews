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

//Our max depth fails on base cases (2 or 1 nodes). Need to adjust it.
var maxDepth = function(root) {
    var treeDive = function (node,level) {
        if (node == null) { return level;}
        if (node.left == null && node.right == null) {
            return level;
        }
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
    let lDepth = 0;
    let rDepth = 0;

    while(root) {
        lDepth = maxDepth(root.left);
        rDepth = maxDepth(root.right);
        currMaxL = lDepth + rDepth;
        if (currMaxL >= maxLF) {
            maxLF = currMaxL;
            root=((lDepth >= rDepth)?root.left:root.right;
        } else { break; }
    }
    return maxLF;
};
