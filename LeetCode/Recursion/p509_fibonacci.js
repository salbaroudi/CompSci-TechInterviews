/*
We need to build a tail recursive function
Tail recursion is equivalent to a loop from [n....1].

f(sum,next) => f(sum+1, next+1)

F(0) + F(1) = F(2)
       F(1) + F(2) = F(3)
              F(2) + F(3) = F(4)

It turns out the tail recursive approach requires 3 arguments. I was trying to do it with 2, and getting nowhere.
The hint for this was that we needed the last two arguments (i-1) and (i-2) to calculate i, so this is a general
point to realize when trying to do a tail recursion:

 >>For a recursion with k terms, expect to form a tail recursion with k arguments.<<

The structure of summations above indicates that we need three shifting variables to keep track of calculations.
For every iteration: C = F(n), B=F(n-1), A = F(n-2). For the next iteration, A = F(n-1), B = F(n-1)+F(n-2), and C = A+B...

*/

//Loop Form (forward calculating)
let fib = function(n) {
  let a = 0; let b = 1; let c = 1;

  if (n == 0) { return a; }

  for (let i = 2; i <= n; i++) {
    c = a + b; a = b; b = c;
  }
  return b;
}

//Simple Tail Recursive example.
var tailsum = function(n) {
  if (n == 1) { return 1;}
  return (n + tailsum(n-1)); //Notice we do our call at the very end.
}

//Equivalent Tail Recursive form:
let fibonacci= function (n,a,b) {
  if (n==0) {return a;} //just returns zero.
  if (n==1) {return b;} //actual base case

  return fibTR(n-1,b,a+b);
}
let fib2 = function(n) {
  return fibTR(n,0,1)
}

//Basic recursive solution (not poly time - 2^n calls made!!).
var fibbad = function(n) {
  if (n == 0) { return 0; }
  if (n == 1) { return 1; }

  return fib(n-1) + fib(n-2);
};
