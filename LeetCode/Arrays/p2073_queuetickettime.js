
/*
//Attempt 2
var timeRequiredToBuy = function(tickets, k) {

  ...

  for (let i = 0; i < (numPasses-1); i++) {
    tickets = tickets.map((x) => {
      if (x > 0) { tCount+=1; return x-1;}
      else { return 0;}
    });

  ...
}

Settled on simple for loops for my final solution. Tried out a map() solution,
but becasuse ticket buyer k may not need the most # of tickets, and is not at the
end of the array, I needed annoying checks in my loops to avoid overshoot.
Pure for loops was a cleaner implementation.

Learning Point (From Discussions:)

You can actually solve this in one pass O(n). You don't need to simulate the queue, an analytical formula
can be found for this. Realize:
- That a[k] is an upper bound on the number of loops we have to do.
- elements after k will contribute (a[k])-1) tickets to our count, or zero out.
- elements before k will contribute upto (a[k]) tickets to our count, or zero out.

See: https://leetcode.com/problems/time-needed-to-buy-tickets/discuss/1577017/JavaScript-One-Pass

*/

//Solution:
var timeRequiredToBuy = function(tickets, k) {
  let numPasses = tickets[k];
  let tCount = 0;

  for (let i = 0; i < (numPasses-1); i++) {
    for (let j = 0; j < tickets.length; j++) {
      if (tickets[j] > 0) { tCount+=1; tickets[j]-=1; }
    }
  }
  for (let j = 0; j <= k; j++) {
    if (tickets[j] != 0) { tCount+=1; }
  }
  return tCount;
}

//Leetcode Tests (is checked for?):
// Negative ticket numbers
// Participant out of bounds
// Ticket number over 100

let zeroA = [3];
if (timeRequiredToBuy(zeroA, 0) == 3) { console.log("Test 0a passed"); }
else { console.log("Test 0a failed"); }


let zeroB = [0];
if (timeRequiredToBuy(zeroB, 0) == 0) { console.log("Test 0b passed"); }
else { console.log("Test 0b failed"); }


let oneA = [1,2,3,2,1];
if (timeRequiredToBuy(oneA, 2) == 9) { console.log("Test 1a passed"); }
else { console.log("Test 1a failed"); }

let oneB = [2,3,2];
if (timeRequiredToBuy(oneB, 2) == 6) { console.log("Test 1b passed"); }
else { console.log("Test 1b failed"); }

let oneC = [5,1,1,1];
if (timeRequiredToBuy(oneC, 0) == 8) { console.log("Test 1c passed"); }
else { console.log("Test 1c failed"); }
