
/*Attempt 2: Using the Hint and Hash tables

Lets make a frequency count of all the numbers in the table, as a limit.

We need to generate a number from 100-998, and check if it works with our frequency set.


*/
var findEvenNumbers = function(digits) {
    let hashDict = {} //All possible numbers.
    for (let i = 0 ; i < 10; i++) {
        hashDict[i] = digits.reduce( (sum,val) => {return ( (val == i)?sum+=1:sum);},0)
    }

    let validNums = [];
    let bound = digits.reduce((a, b) => Math.max(a, b),0);
    let cents; let ones; let tens;
    let tCents; let tTens; let tOnes;

    for (let i = 100; i < (bound+1)*100; i+=2) {
        cents = ((i -(i % 100))/100);
        ones = i % 10;
        tens = ((i - cents*100 - ones)/10);

        //Store dict values, as they will be mutated.
        tCents = hashDict[cents]; tTens = hashDict[tens]; tOnes = hashDict[ones];
        hashDict[cents] -= 1; hashDict[tens] -= 1; hashDict[ones] -= 1;

        if ((hashDict[cents] >= 0)&&(hashDict[tens] >= 0)&&(hashDict[ones] >= 0)) {
            validNums.push(i);
        }
        //Reset dictionary
        hashDict[cents] = tCents; hashDict[tens] = tTens; hashDict[ones] = tOnes;
    }
    return validNums;
}

/*Corner Cases Check
- Zero digits - OK
- One digits - OK
- Two digits - OK
- OOB Digits - OK

Test Cases:
[2,1,3,0]
[2,2,8,8,2]
[3,7,5]
[1,1,1]
[2,3,6,7,4,0,6,8,5,5,2]
[1,3,6,0,1,3]

*/






/* Attempt 1. I am still not sure how hash tables fit into all of this....
By making a triple loop, we get a lot of duplicates. Each 1-D Array needs its duplicates removed.

We can see that this attempt is a bit ridiculous, chaining solutions togther.
The loop below will still overcount, because it doesn't take into account not reusing elements that have less than 3
instances in the original array. Example: for [2,8,8,2,2] it will form the number "888"

Now we have to scan the loops output, referring to a frequency table.

This is too patchy and imperative to get to the final solution.

But at least, I understand why we should try it the Hint's way.

Trying to construct the answer with a triple loop is painful.
*/

var findEvenNumbers = function(digits) {
    let X = [...new Set(JSON.parse(JSON.stringify(digits)).filter(val => val != 0).sort((a,b) => a - b))];
    let Z = [...new Set(JSON.parse(JSON.stringify(digits)).filter(val => (val % 2 == 0)).sort((a,b) => a - b))];
    let Y = [...new Set(digits.sort((a,b) => a - b))]; //all numbers, mutate digits in place to save space.

    if (Z.length == 0) {return [];} //no even integers possible

    console.log(X);
    console.log(Y);
    console.log(Z);

    let results = [];

    for (let cents of X) {
        for (let tens of Y) {
            for (let ones of Z) { results.push(cents*100 + tens*10 + ones);}
        }
    }


    console.log(results);

    return results;
};
