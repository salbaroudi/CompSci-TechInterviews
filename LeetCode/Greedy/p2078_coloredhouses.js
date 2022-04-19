
/*Greedy Heuristic: The maximum distance must always include the Left or Right Endpoint.
Travese linearly from both sides, finding the max distance */

var maxDistance = function(colors) {
    let maxDistE = 0;
    let maxDistB = 0;
    let flip = colors.length-1;

    for (let i = 0; i < colors.length ; i++) {
        if (colors[0] != colors[i]) {
            maxDistB = i;
        }

    }

    for (let j = 0; j < colors.length ; j++) {
        if (colors[flip] != colors[flip-j]) {
            maxDistE = j;
        }
    }

    return (maxDistB >= maxDistE) ? maxDistB : maxDistE
}


/*Corner Cases Check:
Try 1 element array - OK
Try a negative or >100 color - OK
Try an array with uniform houses - OK

Test Cases:
[0,1]
[1,0]
[1,1,1,6,1,1,1]
[1,8,3,8,3]
[1,2,3,4,5,6,7,8,9,10]
[1,2,1,2,1,2,1,2]
[1,2,1,2,1,2,1]
[1,2,3,2,1,2,3,2,1,2,3,1]
*/
