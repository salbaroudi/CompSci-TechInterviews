from binheap import BinaryHeap
import pdb

class MinPriorityQueue(BinaryHeap):
    #Just a Minimum Binary Heap, with some extended methods.
    def __init__(self,list):
        super().__init__(list,"min")
        return

    def minheapinsert(self,x):
        self.elemCount = (self.elemCount + 1)
        self.eList.append(x)
        self.reducekey(self.elemCount - 1, x) #push up the heap!

    #Return the minimum value (in list slot zero).
    def minimum(self):
        return self.eList[0]

    #Pull root from minheap - reheapify with last element.
    def extractmin(self):
        exElem = "" #whatever
        if (self.elemCount == 0):
            raise "Error: Heap is empty."
        if (self.elemCount == 1): #one element only.
            exElem = self.eList.pop(0)
            self.elemCount = 0
        else: # multiple elements
            exElem = self.eList[0]
            self.eList[0] = self.eList[self.elemCount-1]
            self.elemCount = self.elemCount - 1
            self.heapify(0)
        return exElem

    #change the list at position i, and rebalance the heap accordingly.
    def reducekey(self,i,k):
        if (i > self.elemCount):
            raise "Error: heap index is out of range."
        if (k > self.eList[i]): #No equals, to allow for minheapinsert to use this code.
            raise "Warning: Key >= current element. Aborting."
        #proceed
        self.eList[i] = k
        while ((i >= 0) and (self.eList[self.parent(i)] > self.eList[i])):
            hold = self.eList[self.parent(i)]
            self.eList[self.parent(i)] = self.eList[i]
            self.eList[i] = hold
            i = self.parent(i)
        return


if __name__ == "__main__":
    heap6 = MinPriorityQueue([8,7,6,5,4,3,2,1])
    heap7 = MinPriorityQueue([13,12,11,10,9,8,7,6,5,4,3,2,1])
    heap8 = MinPriorityQueue([3,2,1])
    heap9 = MinPriorityQueue([2,1])
    heap10 = MinPriorityQueue([1])

    print("Heap 6:")
    heap6.buildheap()
    print(heap6.minimum())
    heap6.printtree()
    heap6.extractmin()
    heap6.printtree()

    print("Heap 7:")
    heap7.buildheap()
    #heap7.printtree()
    #heap7.reducekey(7,1.5)
    heap7.printtree()
    #pdb.set_trace()
    heap7.minheapinsert(1.2)
    heap7.printtree()
