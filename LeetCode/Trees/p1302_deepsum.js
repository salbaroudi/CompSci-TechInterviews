
/*
Learning Point: I got stuck on trying to judge the depth while the recursion was running. I used a closure trick in javascript to get around this.
I could also have just dived once to get the max height, and then dived again to just sum leaves that are of that height.

If you are finding that your functional argument for your recursion is getting too loaded up/complicated....
...use a closure trick or just dive multiple times.
*/

var deepestLeavesSum = function(root) {
    const leaves = [];

    let treeDive = function(root,level){
      if (root == null) { return; }

      level+=1;

      if (root.left == null && root.right == null) {
        leaves.push([level, root.val]);
      }

      treeDive(root.left, level);
      treeDive(root.right, level);
    }

    treeDive(root,0);

    return leaves.sort((a, b) => b[1] - a[1]).reduce( (sum,val) => {return ( (val[0] == leaves[0][0])?sum+=val[1]:sum+=0 );},0)
};

/*Corner Cases:
-empty array - OK
-non range node values - OK

Test Cases:
[5]
[5,6,7,null,null,null,null]
[1,2,3,4,5,null,6,7,null,null,null,null,8]
[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
[1,2,3,4,5,6,7,8,null,null,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,27,28,null,30,31]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
[50,null,54,98,6,null,null,null,34]
[50,null,54,98,6,null,null,12,34]
*/

/* Closure Practise */
/* Test 1:
Sum all the elements we encounter, in an outer variable
*/

var closureSumTest = function(num) {
  let sum = 0;
  var recurse = function(n) {
      for (let i = 0; i < 5; i++) {
        sum+=n;
      }
  }
  recurse(num);
  return sum;
};

/* Test 2:
Traverse the array sequentially, and store elements in outer array,
then return it to user.
*/

var traverseTest = function(arr) {
  const twoArr = [];

  var traverse = function(narr) {
    if (narr.length == 0) { return; }
    if (narr[0] == 2) { twoArr.push(2);}
    narr.shift()
    return traverse(narr);
  }
  traverse(arr);
  return twoArr;
};
