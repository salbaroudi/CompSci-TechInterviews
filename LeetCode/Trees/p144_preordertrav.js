
//Attempt 1: Use a closure and a diving method with no return value.
var preorderTraversal = function(root) {
    const preOrderT = [];
    var treeDive = function (node) {
        if (!node) {return;}
        preOrderT.push(node.val);
        if (!(node.left) && !(node.right)) {return;}
        treeDive(node.left);
        treeDive(node.right);
    }
    treeDive(root);
    return preOrderT;
};

/*Corner Cases check:
- empty array - OK
- out of range node value - OK

[]
[12]
[3,9,20,null,null,15,7]
[1,null,2]
[5,6,7,null,null,null,null]
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[50,null,54,98,6,null,null,null,34]
[50,null,54,98,6,null,null,12,34]







*/
