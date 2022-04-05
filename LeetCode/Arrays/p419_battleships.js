/**
 * @param {character[][]} board
 * @return {number}
 */

/* Rough work
How do we trace connected X's?
Wave front (graph search?)
Depth first search?
Start in the top left corner, and scan. If you encounter an X, move right or forward and keep scanning.
How do we detect stupid inputs?
We can't have adjacent ships. What does this mean?
For this problem, we don't have to solve the negative. we can assume all battleships presented are valid ones.

X_XX___
____XXX
X______
X____X_
X____X_
_XXX___

*/


/*Signature: Matrix (Arr[Arr..]) -> Number
Purpose: We count the number of valid battleships on the
given board. Assume input is not erroneous.
Returns our updated index - lenght of the ship has been traced. */
var runRight = function(cboard,sirow,sjcol) {
    var j = sjcol;
    cboard[sirow][sjcol] = "F";
    while (j < (cboard[0].length - 1)) {
        j = j+1;
        if(cboard[sirow][j] == "X") {
            cboard[sirow][j] = "F";
        }
        else { break; }
    }
    return;
};

var runDown = function(cboard,sirow,sjcol) {
  var i = sirow;
  cboard[sirow][sjcol] = "F";
  while (i < (cboard.length - 1)) {
      i = i+1;
      if(cboard[i][sjcol] == "X") {
          cboard[i][sjcol] = "F";
      }
      else { break; }
  }
  return;

};


var checkNonX = function(board,i,j) {
    return ( (board[i][j] != "F") && (board[i][j] != "."));
};


var countBattleships = function(board) {
    //Error and Constraint tests first:
    let m = board.length;
    if (m < 1) {
        throw("Error: Board Rows < 1. Check input.")
    }
    let n = board[0].length;
    if (n < 1) {
        throw("Error: Board Columns < 1. Check input.")
    }

    //We should make a deep copy of our array...to avoid iterating on a mutating structure.
    var cboard = board; //JSON.parse(JSON.stringify(board)); //Will take O(n^2 time >:( )

    let shipsDetected = 0;
    for (let irow = 0; irow < m; irow++) {
        for (let jcol = 0; jcol < n; jcol++) {
            if ( checkNonX(cboard,irow,jcol) ) { //Must be an X.
                shipsDetected = shipsDetected + 1;
                if (irow+1 < m) {
                    runDown(cboard,irow,jcol);
                }
                if (jcol+1 < n) {
                    runRight(cboard,irow,jcol);
                }
            }
        }
  }
  return shipsDetected;
};

//Basic Unit Tests:
//Javascript can't compare character arrays by default. Great.
var sameCharArr = function (arr1,arr2) {
  var result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      result = false;
      break;
    }
  }
  return result;
};

//Test Run Right (1)

let oneA = [[".","X","X","X","X","."]];
runRight(oneA,0,1);
if (sameCharArr(oneA[0],['.','F','F','F','F','.'])) { console.log("Test 1a passed"); }
else { console.log("Test 4a failed"); }

let oneB = [[".",".",".",".",".","X"],["","","X","X","",""]];
runRight(oneB,0,5);
if (sameCharArr(oneB[0],[".",".",".",".",".","F"])) { console.log("Test 2b passed"); }
else { console.log("Test 2b failed"); }

let oneC = [["X"],["X"],["X"]]
runRight(oneC,1,0);
if (sameCharArr(oneC[1],["F"])) { console.log("Test 2c passed"); }
else { console.log("Test 2c failed"); }

//Test Run Down (2)
//Turning into too much ad-hoc coding, just do it manually.
let twoA = [[".","X","."],[".","X","."],[".","X","."]];
runDown(twoA,0,1)
console.log(twoA);

let twoB = [[".",".","."],[".",".","."],[".","X","."]];
runDown(twoB,2,1)
console.log(twoB);

let twoC = [["."]];
runDown(twoC,0,0)
console.log(twoC);

let twoD = [["X"],["X"],["X"]]
runDown(twoD,0,0)
console.log(twoD);

//Basic Overall Test:
//Test 3A: 4x4 with 3 distinct ships
let threeA = [[".","X","X","X"],["X",".",".","."],["X",".",".","X"],["X",".",".","X"]];
console.log("Number of Ships Detected: " + countBattleships(threeA));

//Test 3b, minimum input, zero ships
let threeB = [["."]];
console.log("Number of Ships Detected: " + countBattleships(threeA));

//Test 3c, minimum input, one ship
let threeC = [["X"]];
console.log("Number of Ships Detected: " + countBattleships(threeC));

//Test 3d: maximal ships in a 3x3 grid - 5 ships
let threeD = [["X",".","X"],[".","X","."],["X",".","X"]];
console.log("Number of Ships Detected: " + countBattleships(threeD));

//Test 3d: maximal ships in a 4x4 grid - 8 ships
let threeE = [["X",".","X","."],[".","X",".","X"],["X",".","X","."],[".","X",".","X"]];
console.log("Number of Ships Detected: " + countBattleships(threeE));
