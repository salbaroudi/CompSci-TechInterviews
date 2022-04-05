/* Code is mostly my own. I reduce a 2D sort problem to a 1D sort problem via multiplication
by large numbers. Each summand is sufficiently distanced, to create a total 1-D ordering.

Learning Points::

To make purely functional code. i took ideas from the following solution: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/706923/Javascript-es6-one-line

I replaced my for loop to gather the first k elements with a map and slice operation:

var kWeakestRows = function(mat, k) {
    let result = (mat.map((element, index) => [(1001*sumrow(element) + 10*index),index]))
     .sort((a,b) => a[0] - b[0])
     .map((x) => x[1])
     .slice(0,k);
    return result;
};

*/

//Summation support function for map operation.
let sumrow = function(arr) {
  let sum = 0;
  for (let item of arr) {
    sum+= item;
  }
  return sum;
}

//Main function: Matrix Integer -> array
var kWeakestRows = function(mat, k) {
      let subResult = (mat.map((element, index) => [(1001*sumrow(element) + 10*index),index]))
      .sort((a,b) => a[0] - b[0]);

      //Now that we have reduced a 2-D sort problem to a 1-D sort problem, just select the smallest elements.
      let result = [];
      for (let i = 0; i < k; i++) {
        result.push(subResult[i][1]);
      }
      return result;
};

//Tests:
var sameArr = function (arr1,arr2) {
  var result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      result = false;
      break;
    }
  }
  return result;
};

let oneA = [[1,0],[1,0]];
if (sameArr(kWeakestRows(oneA,1),[0])) { console.log("Test 1a passed"); }
else { console.log("Test 1a failed"); }

let oneB = [[1,0,0,0],[1,1,0,0],[0,0,0,0],[1,1,1,0],[1,1,0,0],[1,1,0,0],[1,1,0,0]];
if (sameArr(kWeakestRows(oneB,5),[2,0,1,4,5])) { console.log("Test 1b passed"); }
else { console.log("Test 1b failed"); }

let oneC = [[1,1,1,1],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,1,0,0],[1,0,0,0],[1,1,1,0]];
if (sameArr(kWeakestRows(oneC,4),[1,2,3,5])) { console.log("Test 1c passed"); }
else { console.log("Test 1c failed"); }

let oneD = [[1,0,0],[1,1,1],[0,0,0],[0,0,0],[1,1,0],[1,0,0],[1,1,1],[1,1,0],[1,0,0],[1,1,0],[1,0,0],[1,1,1],[1,1,1],[1,0,0],[1,1,0],[1,1,0],[1,1,1]];
if (sameArr(kWeakestRows(oneC,10),[1,2,3,5])) { console.log("Test 1c passed"); }
else { console.log("Test 1c failed"); }
