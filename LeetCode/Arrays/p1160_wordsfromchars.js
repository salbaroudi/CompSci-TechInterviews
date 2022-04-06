
/*

My first attempt used a set structure. However, through testing i saw that this failed,
as it does not take into account character count for our letter string. So we need a dictionary
that holds the count instead.

Solution below is easy to read, but very slow and memory heavy (objects and human readable loops).

It is actually faster to just take the word element, and replace all letters as you go along
(to keep track) - via mutation. Lack of dictionary building makes this a lot quicker. Like here:

https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/discuss/776901/Javascript-92-Faster-easy-to-understand

Learning Points:
- building dictionary objects for every word 2x's the memory footprint.
- dictionaries are just objects in javascript - there is no dedicated structure (like Set).
- "in" operator is used to see if a object/dict has a particular key (property).
- There is a super elegent reduce method:

https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/discuss/713515/Javascript-ES6-solution-with-Reduce

*/

//Attempt 2: Using the hint about chars and word frequency.
var buildWordDict = function (str) {
    let wDict = new Object();
    for (let alpha of str) {
       ( (! (alpha in wDict) ) ? wDict[alpha] = 1 : wDict[alpha] += 1 );
    }

    return wDict;
};

var countCharacters = function(words, chars) {
    let cDict = buildWordDict(chars);
    let wDict = {};
    let tLen = 0;
    let wordLen = 0;

    for (let word of words) {
      wDict = buildWordDict(word);
      wordLen = word.length;
      for (let alpha of word) {
        if ( !(alpha in cDict)) {
          wordLen = 0;
          break;
        }
        if (wDict[alpha] > cDict[alpha]) {
          wordLen = 0;
          break;
        }
      }
      tLen+=wordLen;
    }
    return tLen;
}


//Leetcode corner cases that are caught:
//Empty String word
//Empty char String
//non [a-z] letters

zeroA = ["a"];
zeroAchars = "a";
if (countCharacters(zeroA, zeroAchars) == 1) { console.log("Test 0a passed"); }
else { console.log("Test 0a failed"); }

oneA = ["goodbye", "yellow", "brick", "road"];
oneAchars = "godbyerad";
if (countCharacters(oneA, oneAchars) == 4) { console.log("Test 1a passed"); }
else { console.log("Test 1a failed"); }

oneB = ["cat","bt","hat","tree"];
oneBchars = "atach";
if (countCharacters(oneB, oneBchars) == 6) { console.log("Test 1b passed"); }
else { console.log("Test 1b failed"); }

oneC = ["hello","world","leetcode"];
oneCchars = "welldonehoneyr";
if (countCharacters(oneC, oneCchars) == 10) { console.log("Test 1c passed"); }
else { console.log("Test 1c failed"); }

oneD = ["so","goodbye","yellow","brick","road","where","the","dogs","of","society","howl","you","cant","plant","me","in","your","penthouse","im","going","back","to","my","plough"];
oneDchars = "aestughinmrou";
if (countCharacters(oneD, oneDchars) == 13) { console.log("Test 1d passed"); }
else { console.log("Test 1d failed"); }
