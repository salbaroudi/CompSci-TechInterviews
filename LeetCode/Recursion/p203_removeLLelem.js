/*
  This one was surprisingly tricky for an easy problem - the low submission ratio should have given it away.
  Quite a few annoying test cases.

  Learning Points: Will focus on optimal case checking code. How much better can others write the code?
  It turns out a LOT more: https://leetcode.com/problems/remove-linked-list-elements/discuss/275445/Javascript-simple-solution

  My code is fast, but poor on memory and quite cumbersome to read.

  - singleton code and repeated head deletion code can be merged.

  - we don't need to check after the repeated head removal for 0 or 1 nodes, because we could have done:

  let curr = head;
  while(curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  new base case would have broken the loop immediately. All other cases handled by this code. Incredible.

  Just translating your ideas directly to code lead to very inefficient code.
  Need to iterate the results of all cases, and group code together more in my planning stages.

*/


var rmE = function(currNode,nextNode,val) {
    if (nextNode.next == null) {
        if (nextNode.val == val) {
            currNode.next = null;
        }
        return; //can only return when we reach the end.

    } else { //not at the end!
        let firstArg = nextNode;
        if (nextNode.val == val) {
            currNode.next = nextNode.next;
            firstArg = currNode;
        }
        rmE(firstArg,nextNode.next,val);
    }
}

var removeElements = function(head, val) {
    //base cases
    if (head == null) {return null;} //0
    if (head.next == null) { //1
        if (head.val == val) { return null; }
        else {return head;}
    }

    //subcase: Finding a secure head to start.
    while ((head != null) && (head.val == val)) {
        head = head.next;
    }

    //Now check to make sure we don't have the 7777 and 7777X example in play:
    if ((head == null) || (head.next == null)) {
        return head;
    }

    //General case...finally!
    rmE(head,head.next,val);
    return head;
};

//Test cases
/*
[]
1
[3]
1
[5]
5
[1,2,6,3,4,5,6]
6
[]
1
[7,7,7,7]
7
[7,7,7]
7
[7,7,7,1]
7
[1,2,6,3,4,5]
6
[1,2,6,6,3,4,5]
6
[1,2,6,6,3,6,6,4,5]
6
[1,2,6,6,3,6,6,4,5,6,6]
6
[6,6,2,6,6,3,6,6,4,5,6,6]
6
[1,2,3,4,5,6,7,8,9,6,6,6,6,6,6,6,6]
6
*/
