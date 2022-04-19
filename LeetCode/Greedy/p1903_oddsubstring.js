/**
 * @param {string} num
 * @return {string}
 */

//An odd number has 13579 as its last number. Scan from the end, find index,
//and then return {0,i} substring. It must be maximal in size.
var largestOddNumber = function(num) {
    let endPoint = -1;

    for (let i = (num.length - 1); i > -1; i--) {
        if (num[i] % 2 == 1) {endPoint = i; break;}
    }

    return num.substring(0,endPoint+1);

};



/* Corner Cases / Constraints Check:
- empty string - OK
- leading zeros - OK

Test Cases:
"1"
"2"
"52"
"4206"
"35427"
"21222222222222222"
"12222222222222222"
"222222222122222222"
"22222222222222222225"
"1010101010100"

*/
