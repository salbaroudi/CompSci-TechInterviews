var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);

    let tSum = 0; let i = 0
    while ((truckSize > 0) && (i < boxTypes.length)) {
        let mult = Math.min(truckSize,boxTypes[i][0])
        if (truckSize >= boxTypes[i][0]) {
            truckSize-=boxTypes[i][0]
            tSum+=boxTypes[i][1]*boxTypes[i][0];
        }
        else {
            tSum+=boxTypes[i][1]*truckSize;
            break;
        }
        i+=1;
    }
    return tSum;
};

var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);
    let tSum = 0; let i = 0; let nUnits = 0;
    while ((truckSize > 0) && (i < boxTypes.length)) {
        nUnits = Math.min(truckSize,boxTypes[i][0]);
        truckSize-=nUnits;
        tSum+=boxTypes[i][1]*nUnits;
        i+=1;
    }
    return tSum;
};

/* Corner Cases Check
- empty array - OK
- truck size zero - OK
- truck size negative - OK
- negative unitsize - OK
- negative number of boxes - OK
- zero boxes - OK
- zero unitsize - OK
- out of range boxes - OK
- out of range unitsize - OK


Test Cases:

[[1,3],[2,2],[3,1]]
4
[[5,10],[2,5],[4,7],[3,9]]
10



*/
