from pprint import pprint
from math import floor, log2


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

    ##Simple Static methods

    #return index of parent element
    @staticmethod
    def parent(i):
        return floor(i/2)
    #return index of left child.
    @staticmethod
    def left(i):
        return 2*i
    #return index of right child.
    @staticmethod
    def right(i):
        return (2*i+1)

    def getheapheight(self):
        return floor(log2(self.elemCount))

    """
    Core building block algorithm for checking if a subtree is a valid max-heap.
    Will take input "i" as the sub-tree root, and rearrange all elements below,
    if necessary.

    """
    def maxheapify(self,i):
        l = self.left(i)
        r = self.right(i)
        largest = -1
        if (l <= self.elemCount) and (self.eList[l] > self.eList[i]):
            largest = l
        else:
            largest = i
        if (r <= self.elemCount) and (self.eList[r] > self.eList[largest]):
            largest = r
        if (largest != i):
            #Exchange elements
            hold = self.eList[i]
            self.eList[i] = self.eList[largest]
            self.eList[largest] = hold
            #Recursive Call again.
            maxheapify(i)

    #This function will print out a tree representation of our
    #Array. Is designed to work with small numbers, upto 32 elements
    #and give a reasonable print out.
    def printtree():
        maxHeight = this.getheapheight()
        spacing = "  "

        #Deal with the root element. Its centering is based on maxHeight
        print(spacing*maxHeight + str(this.eList[0]) + spacing*maxHeight)

        #Iterate to next height level (from 1 to h...)
        for (i = 1; i < maxHeight-1; i++):
            linestring = ""
            #string rep for all elements on a height level.
            for (j = ((2**i)-1) ; j <= ((2**(i+1))-1); i++):
                if (j > this.elemCount):
                    break
                linestring += str(this.eList[j]) + spacing*i
            print(linestring)




    def heapify(self,i):
        if (self.heapType == "max"):
            self.maxheapify(i)
        else:
            self.minheapify(i)




#    def minheapify(self,i):


#Call our class
if __name__ == "__main__":
    heap1 = BinaryHeap([1,2,3,4,5,6,7,8],"max")
    heap2 = BinaryHeap([1,2,3,4,5,6,7,8], "min")

    heap1.tostring()

    heap1.heapify(2)
