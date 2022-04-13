'''
Solution to Valid Parentheses Problem.

Note that there is a relationship between DFS on a graph, and Well-Formed Parens expressions
The basic algorithm involves pushing an open parens onto a stack,
and immediately popping a closed parens that matches.
If the wrong parens is matched, or stack length is not zero at the end,
we have an invalid expression.

Code scored 95%+ for time, and 75% for space on python3 comparison. A decent first try.
My use of a backwards dictionary to match open/closed parens makes the code quick.
'''


class Solution:
    def checkLeft(self, i: str) -> bool:
        return ((i == "[") or (i == "(") or (i == "{"))

    def isValid(self, s: str) -> bool:
        if (len(s) == 1):
            return False

        stackList = []
        dictMatch = {"]":"[",")":"(","}":"{"}
        result = True

        for i in s:
            if (self.checkLeft(i)):
                stackList.append(i)
            else:
                if (len(stackList) == 0): #no mathcing char - failure.
                    result = False
                    break

                temp = stackList.pop()
                if (not temp == dictMatch[i]):
                    result = False;
                    break

        if ( not (len(stackList) == 0) ):
            result = False

        return result

'''
Corner Cases:
- empty string - handled
- wrong type of bracket - handled
Manual Testing - remove class structure and make methods funcitons to run code below.
These strings are also my test cases for the console.
'''

if __name__ == "__main__":
    fstr0="("
    tstr1="[]"
    tstr2="[]{}()"
    tstr3="[[[[(){}{}]]]]{}[[]]"
    fstr4="[[[[(){}{}]]]]{}([[]]((((()))))"
    fstr5="[[[[(){}{}]]]]{}[[]]((((())))){"
    fstr6="{[[[[(){}{}]]]]{}[[]]((((()))))"

    print(isValid(fstr0))
    print(isValid(tstr1))
    print(isValid(tstr2))
    print(isValid(tstr3))
    print(isValid(fstr4))
    print(isValid(fstr5))
    print(isValid(fstr6))
