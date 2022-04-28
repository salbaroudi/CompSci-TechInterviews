/**
 * @param {string} rings
 * @return {number}
 */

/* For this question, we set up an additive Map, and parse
the string. Any rod that has a score mod 111 == 0 must have been a RGB
rod.

As we can have upto 100 elements, we need to separate our sum scores so that we don't get overlaps if there are too many of one color.

Let R = 10000, G = 1000, B = 100. 1RGB Set = 11100, this is our modulus.

Learning Points:

-An object being used as a dictionary is not considered an iterable in JavasScript, see:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

So we implement a MAP instead for our dictionary - avoiding object hacks.

Wanted to use reduce here, but it doesn't seem to work.

A For loop will get the job done.

*/


//Attempt 4: Need a way to encode 1 R, 1 G, 1B found and then STOP in our Map structure.
var countPoints = function(rings) {
    let rodMap = new Map();
    for (let i = 0; i < 10; i++) { rodMap.set(i,[0,0,0]); }

    let p1; let p2;
    for (let i = 0; i < rings.length; i+=2) {
        p1 = rings[i]; p2 = Number(rings[i+1]);
        (p1 == "R")?rodMap.get(p2)[0]=1:0;
        (p1 == "G")?rodMap.get(p2)[1]=1:0;
        (p1 == "B")?rodMap.get(p2)[2]=1:0;
    }

    let sum=0;
    for (let [key,val] of rodMap) {
        if ((val[0]==1)&&(val[1]==1)&&(val[2]==1)) {sum+=1;}
    }

    return sum;
};



//Attempt 3: We only need RGB on the post - everything else extraneous
//This also fails! on Test Case: "G1G1R1B1". You can subtract Green twice and screw up our assumptions.
var countPoints = function(rings) {
    let rodMap = new Map();
    for (let i = 0; i < 10; i++) { rodMap.set(i,101010); }

    let l1; let n2; let mapVal;
    for (let i = 0; i < rings.length; i+=2) {
        l1 = rings[i]; n2 = Number(rings[i+1]); mapVal = rodMap.get(n2);
        if (mapVal != 0) {
            (l1 == "R")?rodMap.set(n2,mapVal-100000):0;
            (l1 == "G")?rodMap.set(n2,mapVal-1000):0;
            (l1 == "B")?rodMap.set(n2,mapVal-10):0;
        }
    }

    console.log(rodMap);

    let sum=0;
    for (let [key,val] of rodMap) {
        if (val == 0) {sum+=1;}
    }

    return sum;
};




//Attempt 2:
//Fails! Too strict as we don't need to find sets of RGB, we just say YES when we find a R,G,B and stop
var countPoints = function(rings) {
    let rodMap = new Map();
    for (let i = 0; i < 10; i++) { rodMap.set(i,0); }

    let p1; let p2;
    for (let i = 0; i < rings.length; i+=2) {
        p1 = rings[i]; p2 = Number(rings[i+1]);
        (p1 == "R")?rodMap.set(p2,rodMap.get(p2)+10000):0;
        (p1 == "G")?rodMap.set(p2,rodMap.get(p2)+1000):0;
        (p1 == "B")?rodMap.set(p2,rodMap.get(p2)+100):0;
    }

    let sum=0;
    for (let [key,val] of rodMap) {
        if ((val != 0)&&(val% 11100 == 0)) {sum+=1;}
    }

    return sum;
};


/* Corner Cases Check:
- rings length not 2n - OK
- zero elements - OK
- Other color (Y) - OK
- Integer placed in letter slot - OK


Test Cases:
"R6G6B6"
"G1G1B1R1"
"R1G1B1R1R1R1R1R1R1R1R1R1"
"B0B6G0R6R0R6G9"
"B0R0G0R9R0B0G0"
"G4"
"R0R0R0R0R0G0G0G0G0G0B0B0B0B0B0"
"R0G0B0R1G1B1R2G2B2R3G3B3R4G4B4R5G5B5R6G6B6R7G7B7"
"R1G5B6R4G8B1R9G2B0R0G0B0R0G7B8R6G5B4R2G1B2R3G4B6R4G5B2R8G7B3R6G4B5R5G7B6R8G1B2R3G7B6R5G4B7R0G0B1R5G4B8R9G3B1R2G4B8"

*/
