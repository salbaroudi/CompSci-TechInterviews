
/*Implementation of Merge-Sort.
Algorithm comes from CLRS (3rd Ed.  - pages 29-36)

Input: An unsorted JavaScript Array.
Output: None (Mutated input array).

Will throw error if non-numerical elements or empty array is passed.
*/

//User Interface function, that does simple checks and prepares
//input for main algorithm.
let mergesort = function (sortArray) {
  //Simple Checks:
  if (sortArray.length == 0) {
    throw("WARNING: Array of length zero passed");
  }
  if (!sortArray.every(Number.isInteger)) {
    throw("ERROR: Non-Numerical Array elements detected.");
  }

  msmain(sortArray,0,sortArray.length-1)
  return }

/*Divide Portion of the CLRS algorithm.
Cleverness here is in the "q" point, which correctly helps us deal with
smaller base cases with 3 and 2 elements, near the end of the division phase.

Note that with CLRS, we use local scope to store the boundary points of
the divided arrays, and mutate the array for the mergeup() function.

For Testing purposes (insert after the "const q" declaration):

//console.log("Lower Array: " + "[" + lBound + "," + q + "]." )
//console.log("Upper Array: " + "[" + (q+1) + "," + uBound + "]." )

*/
function msmain(sArr,lBound,uBound) {
  if (lBound == uBound) {
    return [sArr[lBound]]; //we don't even read the value - base case.
  }

  //Divide Phase:
  if (lBound < uBound) {
    const q = Math.floor((uBound + lBound)/2);
    msmain(sArr, lBound, q);
    msmain(sArr, q+1, uBound);
    //Merge Phase:
    mergeup(sArr,lBound, q, uBound);
  }

  return //Nothing - mutation in place.
}

/*
Given the boundary points from the two msmain() subarrays,
take the original array and mutate in place.

We rely on JavaScript's pass by reference feature to do this.

This produces code that is fairly memory efficient, but is
awkward to look at.

Debugging the calculated bounds below was not fun to do!!
*/

function mergeup(sArr, p, q, r) {
  const n1 = q - p + 1;
  const n2 = r - q;

  let lArr = new Array(n1+1);
  let rArr = new Array(n2+1);

  //Setup our Comparison arrays.
  var i = 0;
  var j = 0;
  for (i; i < n1; i++) {
    lArr[i] = sArr[p + i];
  }
  for (j; j < n2; j++) {
    rArr[j] = sArr[q + j + 1];
  }
  lArr[n1] = Number.POSITIVE_INFINITY;
  rArr[n2] = Number.POSITIVE_INFINITY;

  //Overwrite our Array now...
  i = 0;
  j = 0;

  for (let k = p; k < r+1; k++) {
    if (lArr[i] <= rArr[j]) {
      sArr[k] = lArr[i];
      i = i+1;
    } else {
      sArr[k] = rArr[j];
      j = j+1;
    }
  }

  return //Mutated Array in place. do nothing.
}


//Our Test Suite: -------------------
//Test 1: Empty Array: Will throw an error.
//mergesort([])
//Test 2: Non-Numerical Array; will throw an error.
//mergesort([1,2,3,"QQQ",5])

/*Note that these tests work on an intermediate form of the msmain() function -
They will not work for the final msmain(). Usual testing apparatus was awkward,
the way Merge sort is implemented - so I just do simple calls and inspect the results
via console
*/

//Test 3a: Testing the bounds of our divide phase. One Element
//console.log(mergesort([1]));
//Test 3b: Two elements
//mergesort([2,1])
//Test 3c: Three elements
//mergesort([2,1,5])
//Test 3d: Even case
//mergesort([1,8,2,6,5,18])
//Test 3e: Odd case
//mergesort([1,8,2,6,5,10,12])
//Test 3f: Longer Array (Typical input)
//mergesort([4,3,8,7,1,6,5,2,10,9]);


//Test 4a: CLRS MergeSort.
let fourAArr = [3,2,5,4];
if ( mergesort(fourAArr) == [2,3,4,5] ) { console.log("Test 4a passed"); }
else { console.log("Test 4a failed"); }


//Test 4b: CLRS MergeSort.
let fourBArr = [3,2,5,4,1,6,7,0];
if ( mergesort(fourBArr) == [0,1,2,3,4,5,6,7] ) { console.log("Test 4b passed"); }
else { console.log("Test 4b failed"); }

//Test 4c: Larger Example
let fourCArr = [3,11,2,0,18,5,14,8,7,9,19,1,12,13,6,15,16,17,4,10];
if ( mergesort(fourCArr) == [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19] ) { console.log("Test 4b passed"); }
else { console.log("Test 4b failed"); }
