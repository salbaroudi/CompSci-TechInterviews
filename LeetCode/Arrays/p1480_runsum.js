/**
 * @param {number[]} nums
 * @return {number[]}
 */


/*
Runtime: 64ms, Mem: 42.5MB
*/


/*
 Map on its own cannot work, as you cannot pass the runningsum via argument.
 we ideally need a fun(val,sum) to store the sum. Currying was the solution, as seen here:

 https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript

 Our inner function makes a closure over the outer function (with param SUM), and stores
 the running total in this sum variable. map takes each summand, and makes an array as we wanted.
*/

var runningSum = function(nums) {
    return nums.map( (sum => value => sum+= value)(0) );
};
