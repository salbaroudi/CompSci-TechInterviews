/*
Our greedy heuristic must include the parity (odd/evenness) of the slots that
are occupied. We can assume that there are no sparse arrays or zero padding, so
this makes the problem a bit simpler.

Notice the following:
Even Length Array:
0    1    2    3
X1   X2   X3   X4

Here, two positions are in even slots, and two are in odd slots. So no matter what center we choose, We will get one move for free, and pay 2 x 1 for the other positions.

Consider an Odd Length Array
0    1    2    3    4
X1   X2   X3   X4   X5

Here, we have 3 even slots and two odd slots. The positions are no longer equal, we choose an even slot as our center, and pay 2 to move the two odd tokens to the center.

But of course the number of stones changes things. For example:
0    1    2    3    4
1    1    1    99   1

Here, we need to chose position 3 as our center, because the cost of choosing an even center is too high.

Because all even/odd tiles yield equivalent sums, I propose the following heuristic:

1) Calculate the total chips in odd slots
2) Calculate hte total chips in even slots
whichever set has more elements, is our chosen center.
Pay the cost of the smaller set.
*/


var minCostToMoveChips = function(position) {
    let eSum=0; let oSum=0;
    for (let i of position) { (i % 2 == 0)?eSum+=1:oSum+=1;}
    return (eSum >= oSum)?oSum:eSum;
};

/*
Corner Cases Check:
- zero length arrays - OK
- out of bounds positoin - OK

Test Cases:
[1,2,3]
[2,2,2,3,3]
[1,1000000000]
[1,2,3,4,5,6,7]
[1,2,3,4,5,6]
[1,2,3,4,5,6,7,8]
[1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,5,5,5,5,9,9,9,9,9,11,12]
[1,3,3,3,3,4,4,7,8,9,9,9,9,9,9,10,10,11]
[1,1,1,100,1000,10000,10000,1000000,100000000]
*/
