/**
 * @param {number} n
 * @return {number}
 */

/*

After doing a pen and paper simulations, this is just the Fibonacci sequence that has been
shifted back by one element. So climbStairs(n) = fib(n+1).
I reuse my tail recursive fibonacci answer to solve this question.

Learning Point: Much faster implementations seem to be just using the closed form
fibonacci sequence:, such as:
https://leetcode.com/problems/climbing-stairs/discuss/372022/True-1-line-(fat-arrow)-solution-that-uses-fib-algorithm.-Looks-ugly.

*/

var fibonacci = function(n,a,b) {
    if (n == 0) { return a; }
    if (n == 1) { return b; }

    return fibonacci(n-1, b, b + a);
}


var climbStairs = function(n) {
    return fibonacci((n+1),0,1);
};
