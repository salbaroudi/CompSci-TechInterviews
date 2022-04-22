
/* For Reference:
In Order: (Left, Root, Right)
Pre Order: (Root, Left, Right)
Post Order: (Left, Right, Root)

So the positioning of the push() statement is what makes the difference, between these
three algorithms.

inOrderT.push(node.val);
*/

var inorderTraversal = function(root) {
    const inOrderT = [];
    var treeDive = function (node) {
        if (!node) {return;}
        if (!(node.left) && !(node.right)) {
            inOrderT.push(node.val);
            return;
        }
        treeDive(node.left);
        inOrderT.push(node.val);
        treeDive(node.right);
    }
    treeDive(root);
    return inOrderT;
};

/* Corner Cases Check:
- empty array - OK
- node out of range - OK

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
