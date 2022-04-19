/**
 * @param {number[]} cost
 * @return {number}
 */

/*
Greedy Heuristics:

(i) We cannot get the maximum element for free.
(ii) We want to get as many large cost elements for free as possible, to minimize costs.
(iii) Our free element is <= minimum of two chosen items.

Optimal Problem Structuring: Reverse Sort the List (Max -> Min). Select the largest elements for purchase,
and select the maximum element for free. Repeat until list is empty.

Intuition/Justification: One way to think about this problem, is that we must try to maximize our
bonus set. This is because sum(paid) + sum(bonus) = sum(array) => max{(B)} => min{P}, as this is zero sum.
Then, we must choose the most number of large candies we can, to maximize the bonus set. But we know our bonus set elements
are limited by what candies we pay for...so we must pay for large candies to be able to GET large candies for free.

This is not a proof, but after trying some examples, one can see this is the correct strategy (also see hints, which suggest this).

Learning Points:
- .slice.reduce() is inefficient, the for loop can be structured with an IF, to avoid this. It is conceptually nice (code handles sub-parts).
*/

var minimumCost = function(cost) {

    //length 1 or 2 array.
    if (cost.length < 3) {
        return cost.reduce((a, b) => a + b, 0);
    }

    cost.sort((a,b) => b-a);

    //Sum remainders first
    let remainder = (cost.length % 3)
    let tSum = cost.slice(cost.length-remainder,cost.length).reduce((a, b) => a + b, 0);

    //Sum in pairs, the main portion of the array to get final sum:
    for (let i = 1; i < (cost.length-remainder); i+=3) {
        tSum+=cost[i]+cost[i-1];
    }
    return tSum;
};


console.log(minimumCost([1,2,3,4,5,6,7,8,9]));

/*
Corner Cases Test:
empty array - OK
cost over 100 - OK
cost is zero - OK

[1]
[5,5]
[1,2]
[2,1]
[1,2,3]
[3,3,3]
[3,2,1]
[6,5,7,9,2,2]
[10,9,8,7,6,5,4,3,2,1]
[1,28,3,4,55,6,7,8,99,10,11,42,13,34,15,16,87,18,19,20]


*/
