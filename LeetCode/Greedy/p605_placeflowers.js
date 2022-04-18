var canPlaceFlowers = function(flowerbed, n) {
  let doable = false;
  let zeroRun = 0;

  //Small True Cases
  if (n == 0) {doable = true;}
  else if ((flowerbed.length < 3) && (flowerbed.reduce((a, b) => a + b, 0) == 0) && (n == 1)) {
    doable = true;
  }
  else if (flowerbed.length > 3) { //General Case - won't work with L = 1 or 2.
        for (let bed of flowerbed) {
            if (bed == 0) {
              zeroRun +=1;
            }
            else {
                n-=Math.max(0,Math.ceil((zeroRun - 2)/2));
                zeroRun = 0;
            }
        }
        //Case: Rollover case of a run of zeros at the end
        n-=Math.max(0, (Math.ceil((zeroRun - 2)/2)));
        if ((zeroRun > 0) && (zeroRun % 2 == 0)) { n-=1;} //our odd formula needs patched up.
        if (n <= 0) {
            doable = true;
        }
  }
  return doable;
};
//Gives true instead of false!
console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0],6));

/* Test Cases:
[0]
1
[1]
0
[0,0]
0
[0,0]
1
[0,1]
1
[1,0]
1
[1,0]
0
[1,0,0,0,1]
1
[1,0,0,0,1]
2
[1,0,0,0,1,0,0,0,1,0,0,0,1]
3
[1,0,0,0,1,0,0,0,1,0,0,0,1]
4
[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0]
5
[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0]
6
[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0]
6
[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1]
5
[0,0,1,0,1]
1
[0,1,0,1]
1
[0,0,0,1,0,1]
1
[0,0,0,0,1,0,1]
1
[0,0,0,0,1,0,1]
2
[0,0,0,0,1,0,1]
3
[1,0,0]
1
[0,1,0]
1
[0,0,1]
1

*/




/* Corner Cases:
- zero length array - handled
- non 1/0 number - handled
- two adjacent flowers - handled
- n > flowerbed length - handled
*/
