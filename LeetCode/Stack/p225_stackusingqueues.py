'''
Implementing Stack with two queues. With this implementation, I choose to make
push() slow (O(n)), so that pop() and top() are fast (O(1)). To do this the opposite
way results in writing more code, so was avoided.

Native Python Queue is used for our queue class.

I took some hints for the solution from   here:
https://www.geeksforgeeks.org/implement-stack-using-queue/

Learning Points:
- Typing Hints in Python funname(arg1: type1, arg2: type2...) -> outputtype:
- For no return value, use None
- to swap two pointers, you need a temporary third pointer.
- we could have used one circular queue instead of two queues, but two queues
is more conceptually simple.
-currTop could have been eliminated, if one is ok with just using q1.queue[0] all the time.
- Memory usage was poor - removing currTop and count could improve this.
'''

from queue import Queue

class MyStack:
    def __init__(self):
        self.count = 0
        self.currTop = -1
        self.q1 = Queue() #our main queue.
        self.q2 = Queue() #support/swap queue.

    def push(self, x: int) -> None:
        if (self.count == 0):
            self.q1.put(x)
        else:
            self.q2.put(x)
            for i in range(0,self.count):
                self.q2.put(self.q1.get())
            #Now switch the pointers.
            temp = self.q1
            self.q1 = self.q2
            self.q2 = temp

        self.currTop = x
        self.count += 1
        return

    def pop(self) -> int:
        retVal = -1
        if (not self.empty()):
            retVal = self.q1.get()
            self.count-=1
            if (not self.empty()):
                self.currTop = self.q1.queue[0]
            else:
                self.currTop = -1
        return retVal

    def top(self) -> int:
        return self.currTop

    def empty(self) -> bool:
        if (self.count == 0):
            return True
        return False

    #Not included with LC solution - useful for local debugging.
    def toString(self) -> str:
        repStr = "F:["
        if (not self.empty()):
            for i in range(0,self.count):
                tempVal = self.q1.get()
                repStr+=str(tempVal)+ ","
                self.q2.put(tempVal)
            temp = self.q1
            self.q1 = self.q2
            self.q2 = temp
        return (repStr + "]:B")



'''Corner Cases and console tests:
#Number outside [1,9] - handled
#Overcalling pop - handled
#Overcalling top - handled

["MyStack","push"]
[[],[5]]
["MyStack","push","push","top","pop","empty"]
[[],[1],[2],[],[],[]]
["MyStack","push","push","push","push","push","push","push","pop","pop","pop","top","pop","pop","pop","empty","pop","empty"]
[[],[1],[2],[3],[4],[5],[6],[7],[],[],[],[],[],[],[],[],[],[]]

'''
if __name__ == "__main__":
    #Testing our Stack
    testStack = MyStack()
    testStack.push(1)
    testStack.push(2)
    testStack.push(3)
    testStack.push(4)
    testStack.push(5)
    testStack.push(6)
    testStack.push(7)
    print(testStack.pop())
    print(testStack.pop())
    print(testStack.toString())
    print(testStack.pop())
    print(testStack.pop())
    print(testStack.top())
    print(testStack.empty())
    print(testStack.toString())
    print(testStack.pop())
    print(testStack.pop())
    print(testStack.toString())
    print(testStack.pop())
    print(testStack.toString())
    print(testStack.pop())
    print(testStack.top())
