
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

  return msmain(sortArray,0,sortArray.length-1)
}

//Takes in a checked array to be sorted. Returns a copy of the sorted array.
//Direct implementation of CLRS Algorithm in JS.
function msmain(sArr,lBound,uBound) {
  if (lBound == uBound) {
    return [sArr[lBound]]; //we don't even read the value - base case.
  }

  //Divide Phase:
  if (lBound < uBound) {
    const q = Math.floor((uBound + lBound)/2);
    //console.log("Lower Array: " + "[" + lBound + "," + q + "]." )
    //console.log("Upper Array: " + "[" + (q+1) + "," + uBound + "]." )
    msmain(sArr, lBound, q);
    msmain(sArr, q+1, uBound);

    //pass subArray with bounds, and sort it. Return subArray.
    newArr = mergeup(sArr,lBound, q, uBound);
  }

  return newArr;
}


//Now take our two sub-arrays, and merge them up.
function mergeup(sArr, p, q, r) {
  const n1 = q - p + 1;
  const n2 = r - q;

  let lArr = new Array(n1+1);
  let rArr = new Array(n2+1);

  //Setup our Comparison arrays.
  var i = 0;
  var j = 0;

  for (i; i < n1; i++) {
    lArr[i] = sArr[p + i - 1];
  }

  for (j; j < n2; j++) {
    lArr[i] = sArr[q + j];
  }

  lArr[n1] = Number.POSITIVE_INFINITY;
  rArr[n2] = Number.POSITIVE_INFINITY;

  //Overwrite our Array now...
  i = 0;
  j = 0;
  for (let k = p; k < r; k++) {
    if lArr[i] <= rArr[j] {
      sArr[k] = lArr[i];
      i = i+1;
    } else {
      sArr[k] = rArr[j];
      j = j+1;
    }
  }

  return //we overwrote our referenced array!
}






  return newArr;
}


/*
//Base Case: One Element
if (sArr.length == 1) { return sArr;}

//General Case: Two or more elements. slice() makes copies of arrays (no clobber!).
midP = Math.ceil(sArr.length/2 - 1);


sortedL = msmain(sArr.slice(0,midP+1));
sortedR = msmain(sArr.slice(midP+1, sArr.length));

//Recombination Phase: Overwrite sArr to save memory - clobbering OK.
let retArr = new Array(sortedL.length + sortedR.length);
*/



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

let fun1 = function(arr) {
  arr[3] = 100000;
}

let fun2 = function(arr) {
  arr[5] = 99999;
}

myArr = [10,9,8,7,6,5,4,3,2,1,1];
fun1(myArr);
fun2(myArr);
console.log(myArr)
