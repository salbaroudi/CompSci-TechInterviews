//Binary Search Implementation with Recursion:
//Return the array index position of the element, or -1 otherwise.

//User friendly call, two argument header.
let binarysearch = function(searchArr,searchVal) {
  if (searchArr.length == 0) { throw("ERROR: Zero Length Array"); }
  return bsmain(searchArr, searchVal, 0, searchArr.length - 1)
}

//Main function that does the work.
function bsmain(sArr, sVal, lower, upper) {
  let rVal = -1;
  //Base Cases
  if ((upper - lower) == 0) {
    rVal = (sArr[lower] == sVal) ? lower : -1;
    return rVal;
  }

  //adding lower gives the proper offset.
  midP = Math.ceil(((upper - lower)/2) - 1) + lower;
  if (sArr[midP] == sVal) {
    rVal = midP;
  }
  else if (sArr[midP] < sVal) { //Look in upper portion
    rVal =  bsmain(sArr, sVal, midP + 1, upper);
  }
  else { //All that is left is lower portion
    rVal = bsmain(sArr, sVal, lower, midP);
  }
  return rVal;
}

//Test Cases:
//Test 0: Will throw an error.
//binarysearch([],12);

//Test 1:One element to be found
if (binarysearch([12],12) == 0) { console.log("Test 1 Passed"); }
else { console.log("Test 1 Failed"); }


//Test 2: One element, not to be found
if (binarysearch([13],12) == -1) { console.log("Test 2 passed"); }
else { console.log("Test 2 failed"); }

//Test 3: two elements, with elem to be found in lower slot
if (binarysearch([12,13],12) == 0) { console.log("Test 3 passed"); }
else { console.log("Test 3 failed"); }

//Test 4: two elements, with elem to be found in upper slot
if (binarysearch([12,13],13) == 1) { console.log("Test 4 passed"); }
else { console.log("Test 4 failed"); }

//Test 5: two elements, with no elem to be found
if (binarysearch([12,13],15) == -1) { console.log("Test 5 passed"); }
else { console.log("Test 5 failed"); }

//Test 6: An array with many elements, and a present value.
let t1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
if (binarysearch(t1,8) == 7) { console.log("Test 6 passed"); }
else { console.log("Test 6 failed"); }

//Test 7: Same t1 array with extreme element.
if (binarysearch(t1,20) == 19) { console.log("Test 7 passed"); }
else { console.log("Test 7 failed"); }

//Test 8: Same t1 array with extreme element.
if (binarysearch(t1,1) == 0) { console.log("Test 8 passed"); }
else { console.log("Test 8 failed"); }

//Test 9: Same t1 array with standard element.
if (binarysearch(t1,15) == 14) { console.log("Test 9 passed"); }
else { console.log("Test 9 failed"); }

//Test 9: Same t1 array with missing element.
if (binarysearch(t1,55) == -1) { console.log("Test 10 passed"); }
else { console.log("Test 10 failed"); }
