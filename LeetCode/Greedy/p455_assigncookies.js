/*
Our Greedy Heuristic: min{\sum (cookie-greed)}. We wish to make this sum as small as
possible.

For example: if we have a cookie of size 4, we should give it to a child with greed 3, not a child with greed 1. If we use it on a child with greed 3, we can use smaller cookies on a child of greed 1 (if available). Even if there are no more cookies avaiable, we still satisfy the same number of children (giving to 3 vs 1).

Why not use a hash map? (construction is O(n) Time). Build a cookie hash map, sort the children, and start from the biggest child.

Run Time:
- Two sorts: O(nlogn)
- Loop: Averages ~ O(n), if we have perfect 1-1 matching, we do constant work in teh second loop - it ticks over with the outer loop and doesn't back track.

For sparse matching, the inner loop doesn't reset because of the start variable.

Overall Runtime O(nlogn)
*/

var findContentChildren = function(g, s) {
    g.sort((a,b) => b-a);
    s.sort((a,b) => b-a);

    let start = 0;let cCount = 0;let i = 0;

    while ((i < s.length)&&(start<g.length)) {
        for (let j = start; j< g.length; j++) {
            start = j;
            if (s[i] >= g[j]) {
                cCount+=1;
                start+=1;
                break;
            }
        }
        i+=1;
    }
    return cCount;
};


/* Corner Cases Check:
- greed array of zero length - OK
- cookie array of zero length - OK
- greed array has out of range value - OK
- cookie array has out of range value - OK


Test Cases:
[1]
[]
[1]
[2]
[2]
[1]
[99,99,99]
[100,99,50,1]
[11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10]
[10]
[11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10]
[9]
[1,2,3]
[1,1]
[1,2]
[1,2,3]
[7,8,3,5,7,6,3,2,4,6,8]
[9,9,9,5,5,1]
[1,2,3,5,7,4,7,9,4,3,3,76,9,4,3,3,4,6,9,65,4,32,4,7,9,9,43,3,100,456,4,5,6,7,2,43,5]
[3,5,8,7,4,4,5,3,4,5,8,9,4,5,8,4]
[5,5,5,5,5,5,5,5,5,5,5,5,5,5]
[5,5,5,5,5,5,5,5,5,5,5,5,5,5]

*/
