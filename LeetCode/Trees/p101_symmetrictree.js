/*
This was an excellent question, with compact code as the end result.

Learning Points:
- JS doesn't have a XOR Operator. Howver you can replace:

((!n1)&&(n2))||((n1)&&(!n2))

with

!n1 != !n2

The !n1 converts a null/pointer to a boolean, and we are looking for inequality between the two, so equivalent.

As Seen here: https://stackoverflow.com/questions/4540422/why-is-there-no-logical-xor-in-javascript

*/

var isSymmetric = function(root) {
    var foldEq = function (n1,n2) {
        if (!n1 != !n2) {return false;} //XOR
        else if ((!n1)&&(!n2)) { return true;} //Both NULL

        //Base case above handles empty nodes. Recurse!
        return ((n1.val==n2.val)&&foldEq(n1.left,n2.right)&&foldEq(n1.right,n2.left));
    }
    //If both null, true. Else call.
    return ((!root.left)&&(!root.right))?true:foldEq(root.left,root.right);
};

/* Corner Cases Check:
- zero nodes - OK
- out of range value - OK

Test Cases:
[1]
[1,2]
[1,null,2]
[1,2,2]
[1,2,3]
[1,2,2,3,4,4,3]
[1,2,2,null,3,null,3]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[1,2,2,3,4,4,3,5,6,7,8,8,7,6,5]
[1,2,2,3,4,4,3,5,6,7,8,8,7,6,5]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,6,7,8,9,10,11,12,13,13,12,11,10,9,8,7,6]
[1,2,2,3,4,4,3,5,6,7,8,8,7,6,5,6,7,8,9,10,11,12,13,13,87,11,10,9,8,7,6]
[1,2,2,3,4,88,3,5,6,7,8,8,7,6,5,6,7,8,9,10,11,12,13,13,12,null,10,9,8,7,6]


*/
