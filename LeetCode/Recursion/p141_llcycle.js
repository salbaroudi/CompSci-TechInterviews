/*

Learning Point: Can be done in O(1) time, because you can overwrite node.val (with an X to mark it).
I can clobber the data structure and use no more memory. Idea comes from this post:

https://leetcode.com/problems/linked-list-cycle/discuss/1776569/Javascript-or-Time-O(n)-or-Space-O(1)-or-Simple-Approach-with-Explanation

My O(1) time solution is too computationally intensive - but it will work.
*/

//Using LL as Storage.
//This is quite easy because JS objects are mutable. 
//This would have been harder in a language like Java.
var hasCycle = function(head) {
    let pos = 0;
    let result = false;

    if(head) {
        while (head.next) {
            if (!head.pos) {
                head.pos = pos;
                head = head.next;
                pos+=1;
            } else {
              result = true;
              break;
            }
        }
    }
    return result;
};

//Using O(1) Storage. If we exceed maximum possible sum, we have a cycle!
//Exceeds Time Limit!!
/*
var hasCycle = function(head) {
    let sum = 0;
    let result = false;
    if (head) {
        while (head.next) {
            sum+=head.val;
            if (sum / (1000000001) >= 1) {
                result = true;
            }
        }
    }
    return result;
};
*/

/*Corner Cases:
- upto 10k nodes (cannot test)
- max and min value exception - caught
- self-cycles are permitted
- pos out of range - caught.
- nodes with duplicate .values are permitted.
- single self-cycle OK.
*/

/* Tests in Console:

[]
-1
[5]
0
[3,2,0,-4]
1
[1,2]
0
[1]
-1
[3,2,0,-4]
1
[1,2]
0
[1,2,3,4]
-1
[1]
-1
[10,-5000,8,-5555,2,3,87,65,1,2,99,1234,0,12]
7
[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
22
[1,2,3,4]
3
 */
