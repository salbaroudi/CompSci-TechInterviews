
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

  return msmain(sortArray,0,)
}


//Takes in a checked array to be sorted. Returns a copy of the sorted array.
function msmain(sArr) {
//Divide Phase:
  //Base Case: One Element
  if (sArr.length == 1) { return sArr;}

  //General Case: Two or more elements. slice() makes copies of arrays (no clobber!).
  midP = Math.ceil(sArr.length/2 - 1);


  sortedL = msmain(sArr.slice(0,midP+1));
  sortedR = msmain(sArr.slice(midP+1, sArr.length));

//Recombination Phase: Overwrite sArr to save memory - clobbering OK.
  let retArr = new Array(sortedL.length + sortedR.length);

}



//Our Test Suite:
//Test 1: Empty Array: Will throw an error.
//mergesort([])

//Test 2: Non-Numerical Array; will throw an error.
//mergesort([1,2,3,"QQQ",5])

//Note that these tests work on an intermediate form of the msmain() function -
//They will not work for the final msmain().
//Test 3a: Testing the bounds of our divide phase. One Element
if (mergesort([1]) == -1) { console.log("Test 3 passed"); }
else { console.log("Test 3 failed"); }

//Test 3b: Two elements
mergesort([2,1])

//Test 3c: Three elements
mergesort([2,1,5])

//Test 3d: Even case
mergesort([1,8,2,6,5,18])

//Test 3e: Odd case
mergesort([1,8,2,6,5,10,12])

//Test 3f: Longer Array (Typical input)
mergesort([4,3,8,7,1,6,5,2,10,9]);
