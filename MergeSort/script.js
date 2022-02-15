
/*Implementation of Merge-Sort.
Recursive Dive-down (to singleton elements), with a double-loop for the recombination phase.

Input: An unsorted JavaScript Array.
Output: A sorted JavaScript Array.

Will throw error if non-numerical elements or empty array is passed.

*/

let mergesort = function (sortArray) {
  //Simple Checks:
  if (sortArray.length == 0) {
    throw("WARNING: Array of length zero passed");
  }
  if (!sortArray.every(Number.isInteger)) {
    throw("ERROR: Non-Numerical Array elements detected.");
  }

  return msmain(sortArray)
}

function msmain(sArr) {
//Divide Phase:
  //Base Case: One Element
  if (sArr.length == 1) { return sArr;}

  //General Case: Two or more elements. slice() makes copies of arrays (no clobber!).
  midP = Math.ceil(sArr.length/2 - 1);
  //console.log([0,"...",midP,midP+1,"...",sArr.length-1]); //For debugging array bounds.
  sortedL = msmain(sArr.slice(0,midP+1));
  sortedR = msmain(sArr.slice(midP+1, sArr.length));

//Recombination Phase: We must have at least two elements.

  let retArr = new Array(sortedL.length + sortedR.length);





}

mergesort([4,3,8,7,1,6,5,2,10,9]);

//Our Test Suite:
//Test 1: Empty Array: Will throw an error.
//mergesort([])

//Test 2: Non-Numerical Array; will throw an error.
//mergesort([1,2,3,"QQQ",5])
