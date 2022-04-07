
/*
The most straight-forward way to do this is to iterate over both lists and do comparisons.
However...Because our lists can be of different sizes, and have different element ranges,
this means there are a lot of conditional checks in a for/while loop. Yuck.

A Javascript solution using arrays is below:
*/
var mTL = function(currList,list1,list2) {
    if (list1.length == 0) { return currList.concat(list2);}
    if (list2.length == 0) { return currList.concat(list1);}

    if (list1[0] <= list2[0]) {
        currList.push(list1.shift());
    }
    else {
        currList.push(list2.shift());
    }

    return mTL(currList,list1,list2)
}

var mergeTwoLists = function(list1, list2) {
    return mTL([],list1,list2);
}

/*
This solution fails! Because LeetCode converts inline arrays to LinkedList structures (can't use array methods).

I was completely perplexed by the LinkedList function that Leetcode was using. My solution is quite cumbersome. After looking at the discussion,
I saw the solution:

Some Learning Points:
- I naively assumed that Arrays would be fine - trying to convert my solution to use LinkedList resulted in a mess of code.
- Without an atom testbed to interact with LinkedList, I had trouble conceptualizing what I needed to do.
- The code below is much omre efficient than my code above - I had Tail Recursion on the brain from a previous problem and so this problem was just another nail...
*/

var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//Using the JS LinkedList, 
