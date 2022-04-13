var canPlaceFlowers = function(flowerbed, n) {
  let doable = false;

  //Base Cases:
  if ( (n == 0) || ((flowerbed.length == 1) && (flowerbed[0] == 0)) || ((flowerbed.length == 2) && (flowerbed[0] == 0) && (flowerbed[1] == 0) && (n == 1)) )  { doable=true; }
  else {
      for (let i = 2; i < flowerbed.length; i++) {
          if ((flowerbed[i-2] == 0) && (flowerbed[i-1] == 0) && (flowerbed[i] == 0)) { n-=1; }
          if (n == 0) { doable = true; break;}
      }
  }

  return doable;

};

/* Corner Cases:
- zero length array - handled
- non 1/0 number - handled
- two adjacent flowers - handled
- n > flowerbed length - handled

Test Cases:
[0]
0
[0]
1
[0,0]
1
[0,0,0]
1
[1,0,0,0,1]
1
[1,0,0,0,1]
2


*/
