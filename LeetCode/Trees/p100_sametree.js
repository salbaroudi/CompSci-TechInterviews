
var isSameTree = function(p, q) {
    var sameRecurse = function (p,q) {
        if (!p&&!q) {return true;}
        if (!p != !q) { return false;}
        return((p.val==q.val)&&sameRecurse(p.left,q.left)&&sameRecurse(p.right,q.right))
    }

    if (!p != !q) { return false;}
    if (!p&&!q) {return true;}

    let tV = (p.val == q.val);

    return ((!p.left)&&(!p.right)&&(!q.left)&&(!q.right))?tV&&true:(tV&&sameRecurse(p.left,q.left)&&sameRecurse(p.right,q.right));
};

/* Corner Cases Check:
- out of range value - OK

Test Cases:
[]
[]
[0]
[0]
[1,2]
[1,2]
[1,2]
[1,null,2]
[1,2,3]
[1,2,3]
[1,2,1]
[1,1,2]
[1,2,3,4,5,6]
[1,2,3,4,9,6]
[1,2,3,4,5,6,7]
[88,2,3,4,5,6,7]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[1,2,3,4,5,6,7,8,null,5,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,6,6,6,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,89,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

*/
