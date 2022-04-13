/* What is our greedy strategy here?

The "best" possible choice, given bill input [i], are as follows:

1) If a $20 bill given, always use a 10 (if possible), then use a 5. Use two 5's if there are no 10s

2) If a $10 is given, always use a $5.

If our 5 dollar bill reserve is exhausted, and we hit a 10 or 20, we return false.

Learning Points:
- I wanted to make the control flow more slick - looking at other JS solutions, it cannot be improved much.
- it seems that a for(let i...;;i++) loop is faster than the functional loop below.
- just using three variables (instead of an array) increases speed.

*/

//Third attempt - dump big array, use a few variables.
var lemonadeChange = function(bills) {
    let doable = true;
    let five = 0, ten=0, twenty=0;

    //Terminate on bullshit inputs immediately.
    if (bills[0] != 5) {return false;}

    for (let bill of bills) {
        if (bill == 10) {
            if (five > 0) {
                ten+=1; five-=1;
            }
            else { doable = false; break; }
        }
        else if (bill == 20) {
            if ((ten > 0) && (five > 0)) {
                ten-=1; five-=1; twenty+=1;
            }
            else if (five > 2) {
                five-=3; twenty+=1;
            }
            else { doable = false; break;}

        } else { five +=1; }
    }
    return doable;
};


/*Check Corner Cases
- non 5/10/20 bill - handled
- empty list - handled
- 10 and 20 in a singleton list - false and false

[5]
[10]
[20]
[5,5,5,10,20]
[5,5,10,10,20]
[5,5,5,5,5,10,10,5,5,5,5,20,20,20,20,20,20]
[5,5,5,5,5,10,10,5,5,5,5,20,20,20,5,5,5,5,5,5,5,5,20,20,20]

*/
