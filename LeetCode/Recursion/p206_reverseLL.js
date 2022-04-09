/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Some Linked List facts:
- Worst: O(n) time retreval/insertion/deletion for nodes
- A naturallly recursive structure - as every node's tail is smaller than the list with head.
- Can replace head and parts of tail - old parts still point to the end element (they don't get
GC'ed)
- Don't need to reorganize memory - nodes can be thrown anywhere.
- Why not have Doubly/feature-full lists all the time? SingleLinked List allows for very simple
recursive algorithms - which may require larger code for imperative methods.

- When to use: Linked List is fairly short, memory reorg (dynamic arrays) can't be done easily for the memory space of a larger program, Operations on linkedlist need to be small and fairly simple.

    if ((head == null) { return null;}
    if (head.next == null) {return head;}

Q: Why do we need three variables to reverse the list?
Consider a general portion of the list:

(A) ==> (B) ==> (C)

1 variable (p): If we set p = B, and reverse the link, we have no access to C. If we reverse the link at C, we cannot go back to A!

2 variable (p and q). Let q = B, and p = C. We can reverse the link B-C, but we cannot access D. We cannot reverse the link A-B, as we have no access to A.

3 variable (r q p): Let R = A, Q = B, P = C. First reverse A-B. Then shift all pointers up by one. since Q points to B, P to C, and we have access to P.next, this can be accomplished.

Learning Points:
- Other solutions claim to use only two variables. This is becasue they use head and two pointers - so three variables are still required.
- Just because you have a "general" method to turn a loop into a tail recursive function, doesn't mean the recursive code is optimal. The recursive code found here:

https://leetcode.com/problems/reverse-linked-list/discuss/1451236/JavaScript-Easy-to-understand-loop-and-recursion

Is a lot better than what I wrote. Further refinements to my boiler-plate iterative to tRecursive method need to be done.

*/

//Iterative Solution:

var reverseList = function(head) {
    if (!head || !head.next) { return head;}

    let r = head;
    let q = head.next;
    let p = q.next;

    head.next = null;

    while (p != null) {
        q.next = r;
        r = q;
        q = p;
        p = p.next;
    }
    q.next = r;
    return q;
}


//Recursive Solution:
var rvL = function(r,q,p) {
    let result;
    if (p != null) {
        q.next = r;
        result = rvL(q,p,p.next);
    } else {
        q.next = r;
        result = q;
    }
    return result;
}

var reverseList = function(head) {
    if (!head || !head.next) { return head;}
    let result = rvL(head,head.next,(head.next).next);
    head.next = null;
    return result;
};
