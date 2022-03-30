/**
 * @param {number[][]} mat
 * @return {number}
 */


//Runtime: 60ms, Memory: 43MB

/*Imperative solution
Sum both diagonals with one loop, subtract-off the double counted value if n is odd.
Takes square matrices as input only (Array of Arrays).
*/
var diagonalSum = function(mat) {
    var diagSum = 0;
    for (let i = 0; i < mat.length; i++) {
       diagSum += (mat[i][i] + mat[(mat.length-1) - i][i]);
    }
    if (mat.length % 2 == 1) {
        diagSum -= mat[(mat.length-1)/2][(mat.length-1)/2];
    }
    return diagSum;
};


/* Learning Points: Does assigning a variable vs recalculating it save on run-time?
No!

With a mat.length temp variable that I modified thorughout for bounds, I was at 17%tile for speed, and 50%tile for memory.

Using the above solution, I am at 97%tile for speed and 86% for memory usage. Ugly, but it is more efficient.
*/
