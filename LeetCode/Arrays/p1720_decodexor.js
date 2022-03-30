/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

/* First lets do it imperatively
var decode = function(encoded, first) {
    let decoded = new Array(encoded.length+1);
    decoded[0] = first;
    let mask = first;
    for (let i = 0; i < encoded.length;i++) {
        decoded[i+1] = encoded[i] ^ mask;
        mask = decoded[i+1];
    }
    return decoded;
};
*/

/*This is a functional solution, using currying again.
This is faster in run-time speed than the imperative version.
*/
var decode = function(encoded, first) {
    let tailDec = encoded.map( (mask => x => {
        let temp = mask ^ x;
        mask = temp;
        return temp;
    })(first));
    tailDec.unshift(first);
    return tailDec;
}


let encoded = [1,2,3];
let first = 1

let result = decode(encoded,first);

/*
Improvements: The fastest solution was to use foreach and push onto an output array, like so:

const decode = (encoded, first) => {
    const out = [first]
    encoded.forEach((x, i) => out.push(out[i] ^ x))
    return out
}

Source: https://leetcode.com/problems/decode-xored-array/discuss/1046860/Simple-JS-solution

Not everything has to be M/A/F + functional programming.

*/
