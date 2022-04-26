/* This problem is about pushing people into the "Dead Zone" - if you start your turn, and the number of stones
in the pile is divisible by 4, your opponent can keep you in a slot that is always divisible by 4. Note the following base cases:


N | Moves    | Result
--------------------------------------------------
1| P1:1          |WIN
2| P1:2          |WIN
3| P1:3          |WIN
4| P1: 1-3, P2: 3-1| WIN
.....

For cases 5,6,7, you can take 1-3 stones, and push the opponent into the Dead Zone. As they can only take 1-3 stones,
you adjust your move to keep them in place.

So player 1 can win as long as their number of moves is not divisible by 4, if optimal play is assumed from both parties.

This makes our function trivial, as seen below:
*/

var canWinNim = function(n) {
    return !(n % 4 == 0)
};

//Test Cases:
1
2
3
4
5
6
7
8
9
10
15
25
29
37
86
115
234
499
1001
2364674
34554
4577
