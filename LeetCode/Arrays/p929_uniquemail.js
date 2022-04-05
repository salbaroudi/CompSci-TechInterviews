/*
Solution below scores 95% for speed and 85% for memory usage.
It is cumbersome, but straight forward to understand.

A more clean (functional) solutoin from:

https://leetcode.com/problems/unique-email-addresses/discuss/310272/Clean-javascript-4-lines-solution-without-Regex


var numUniqueEmails = function(emails) {
  return (new Set(emails.map(email => {
    const [local, domain] = email.split('@');
    return local.split('+').shift().split('.').join('') + '@' + domain;
  }))).size;
};

Learning Point: can split into a constant array .
- clever usage of shift and join methods to chain our calls.

*/


var numUniqueEmails = function(emails) {
  const emailSet = new Set();
  let firstArr = [];
  let domainName = "";
  let localName = ""
  let localArr = [];
  let uniqueCount = 0;
  let processedEmail = "";

  for (let address of emails) {
    firstArr = address.split("@");
    domainName = firstArr[1];
    localName = firstArr[0];

    //Plus Sign
    if (localName.indexOf("+") != -1) {
        localName = localName.slice(0,localName.indexOf("+"));
    }

    //Extra Dots
    if (localName.indexOf(".") != -1) {
      localArr = localName.split(".")
      localName = "";
      for (let subString of localArr) {
        localName +=subString;
      }
    }

    //Set Check and Insertion
    processedEmail = (localName + "@" +  domainName);
    //console.log(processedEmail);
    if (!emailSet.has( processedEmail )) {
      uniqueCount+=1;
      emailSet.add(processedEmail);
    }
   }
    console.log(emailSet);
    return uniqueCount;
};
//Tests.

//Using illegal characters (non a-z,+,.,@) - leetcode does not give test cases
//You can have a "+" start your domainName!
//Domain and local name cannot be empty.


//Basic - just one element.
zeroA = ["basic@gmail.com"]
if (numUniqueEmails(zeroA) == 1 ) { console.log("Test 0a passed"); }
else { console.log("Test 0a failed"); }

// 3 easy emails.
oneA = ["a@sharklasers.com","b@sharklasers.com","c@sharklasers.com"];
if (numUniqueEmails(oneA) == 3 ) { console.log("Test 1a passed"); }
else { console.log("Test 1a failed"); }

//Clip out extraneous information.
oneB = ["a+asfadsfdfadsf@sharklasers.com","b+asdfasdfadsfasdf@sharklasers.com","c+asdfdasfasdfasd@sharklasers.com"];
if (numUniqueEmails(oneA) == 3 ) { console.log("Test 1b passed"); }
else { console.log("Test 1b failed"); }

//Multiple Pluses all over.
oneC = ["a+asf+ad+sf+dfa+ds+f@sharklasers.com","b+a+s+d+fa+sd+fad+sfa+s+df@sharklasers.com","c+asdf+d+a+sfasdfa+sd+@sharklasers.com"];
if (numUniqueEmails(oneC) == 3 ) { console.log("Test 1c passed"); }
else { console.log("Test 1c failed"); }

//No pluses, but lots of dots.
oneD = ["a.b.c.d.e@gmail.com","f.g.h.i.j@hotmail.com","k.l.m.n.o@sympatico.com"]
if (numUniqueEmails(oneD) == 3 ) { console.log("Test 1d passed"); }
else { console.log("Test 1d failed"); }

//Dots and Pluses.
oneE = ["a.b.c.d.e+julie@gmail.com","f.g.h.i.j+john+jim@hotmail.com","k.l.m.n.o+percival+peter@sympatico.com"]
if (numUniqueEmails(oneE) == 3 ) { console.log("Test 1e passed"); }
else { console.log("Test 1e failed"); }

//Trying with different domain names - more dots.
oneF = ["a.b.c.d.e+julie@gma.il.com","a.b.c.d.e+julie@gma.i.l.com","a.b.c.d.e+julie@g.ma.il.com"]
if (numUniqueEmails(oneF) == 3 ) { console.log("Test 1f passed"); }
else { console.log("Test 1f failed"); }

//Proper Test. We should get just two emails from the five below.
oneG = ["jon.smith+julie@gmail.com","jonsmith+julie@gmail.com","j.on.smi.th+julie@gmail.com","jonsmith+julie@gma.il.com","j.on.smi.th+julie@gma.il.com"]
if (numUniqueEmails(oneG) == 2 ) { console.log("Test 1g passed"); }
else { console.log("Test 1g failed"); }

oneH = ["jon.smith+julie@+gmail.com"]
if (numUniqueEmails(oneH) == 1 ) { console.log("Test 1h passed"); }
else { console.log("Test 1h failed"); }

oneI = ["jon.smith+julie@+gma+il.com"]
if (numUniqueEmails(oneI) == 1 ) { console.log("Test 1i passed"); }
else { console.log("Test 1i failed"); }
