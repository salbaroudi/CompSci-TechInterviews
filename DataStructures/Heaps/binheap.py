from pprint import pprint
from math import floor, log2, ceil
import pdb
#pdb.set_trace() --- use to start debugging!

class BinaryHeap:
    """
    Only need a list, and number of elements.
    Relies on pythons under-the-hood ability to define lists of aribtrary length.
    This is example code, and should not be used for production level coding. */
    """
    def __init__(self,list,heaptype):
        if len(list) == 0:
            raise("Error: List is empty")
        for item in list:
            if (type(item) != int):
                raise("Error: Non integer item detected in list.")
        if (heaptype.lower() == "max") or (heaptype.lower() == "min"):
            self.heapType = heaptype
        else:
            raise("Error: For heaptype - 'max' or 'min' has not been specified.")

        #Passed basic check, define fields.
        self.elemCount = len(list)
        self.eList = list
        return

    """Wrapper code to examine our objects more easily"""
    def tostring(self):
        pprint(vars(self))
        return

    ##Simple Static methods:
    #return index of parent element
    @staticmethod
    def parent(i):
        return ceil((i/2) - 1)
    #return index of left child.
    @staticmethod
    def left(i):
        return (2*i + 1)
    #return index of right child.
    @staticmethod
    def right(i):
        return (2*i+2)

    def getheapheight(self):
        return floor(log2(self.elemCount))

    #This function will print out a tree representation of our
    #array. Is designed to work with small numbers, upto 32 elements
    #and give a reasonable print out.
    def printtree(self):
        maxHeight = self.getheapheight()
        spacing = "  "

        #Deal with the root element. Its centering is based on maxHeight
        print(str(self.eList[0]))

        #Iterate to next height level (from 1 to h...)
        for i in range(1,maxHeight+1):
            linestring = ""
            #string rep for all elements on a height level.
            for j in range((2**i)-1,2**(i+1)-1):
                if (j >= self.elemCount):
                    break
                linestring += str(self.eList[j]) + spacing*(maxHeight+1-i)
            print(linestring)
        return


    """
    Core building block algorithm for checking if a subtree is a valid max-heap.
    Will take input "i" as the sub-tree root, and rearrange all elements below,
    if necessary.

    """
    def maxheapify(self,i):
        l = self.left(i)
        r = self.right(i)
        largest = -1
        if (l < self.elemCount) and (self.eList[l] > self.eList[i]):
            largest = l
        else:
            largest = i
        if (r < self.elemCount) and (self.eList[r] > self.eList[largest]):
            largest = r
        if (largest != i):
            #Exchange elements
            hold = self.eList[i]
            self.eList[i] = self.eList[largest]
            self.eList[largest] = hold
            #Recursive Call again.
            self.maxheapify(largest)
        return

    '''
    The...minheapify function.

    Yes, we could have done operation overloading (< >) with more advanced
    OOP coding techniques to reduce redundant code.

    In truth, this is a toy example and I don't care enough that much about OOP.
    '''
    def minheapify(self,i):
        l = self.left(i)
        r = self.right(i)
        smallest = -1
        if (l < self.elemCount) and (self.eList[l] < self.eList[i]):
            smallest = l
        else:
            smallest = i
        if (r < self.elemCount) and (self.eList[r] < self.eList[smallest]):
            smallest = r
        if (smallest != i):
            #Exchange elements
            hold = self.eList[i]
            self.eList[i] = self.eList[smallest]
            self.eList[smallest] = hold
            #Recursive Call again.
            self.minheapify(smallest)
        return

    """
    Selects based on the max/min property, and reroutes accordingly.
    """

    def heapify(self,i):
        if (self.heapType == "max"):
            self.maxheapify(i)
        else:
            self.minheapify(i)

    """
    Takes a given array, and heapifies it. If new elements are inserted,
    the full heap building must be run again.
    """

    def buildheap(self):
        bound = (floor(self.elemCount/2) - 1)
        for i in range(bound,-1,-1):
            self.heapify(i)


if __name__ == "__main__":
    heap1 = BinaryHeap([1,2,3,4,5,6,7,8],"max")
    heap2 = BinaryHeap([1,2,3,4,5,6,7,8,9,10,11,12,13], "max")
    heap3 = BinaryHeap([1,2,3], "max")
    heap4 = BinaryHeap([1,2], "max")
    heap5 = BinaryHeap([1],"max")

    heap6 = BinaryHeap([8,7,6,5,4,3,2,1],"min")
    heap7 = BinaryHeap([13,12,11,10,9,8,7,6,5,4,3,2,1], "min")
    heap8 = BinaryHeap([3,2,1], "min")
    heap9 = BinaryHeap([2,1], "min")
    heap10 = BinaryHeap([1],"min")
