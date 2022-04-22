//Attempt 2: Use properties of null in JS to optimize if statements.
//If node or node.R/L is null, this will evaluate to False.
var maxDepth = function(root) {
    var treeDive = function (node,level) {
        if (!node) { return level;}
        level+=1;
        if (!(node.left) && !(node.right)) {
            return level;
        }
        let lDepth = treeDive(node.left,level);
        let rDepth = treeDive(node.right,level);

        return (lDepth >= rDepth)? lDepth : rDepth;
    };
    return treeDive(root,0);
};

/* Corner Cases Check:
- Empty List - OK
- Out of range node value - OK

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

/*
AI
Quantum
Cryptography
Blockchain
Space
Satellites
Futurism
Algorithms
Metaverse
Engineering
Interplanetary
*/

/*
Job Titles / Searches:b
