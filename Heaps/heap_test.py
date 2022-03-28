import pytest
from binheap import BinaryHeap

#Global objects to test.
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



#Initialize an object correctly::
def test_init():
    assert heap1.heapType == "max"
    assert heap1.eList == [1,2,3,4,5,6,7,8]
    assert heap1.elemCount == len([1,2,3,4,5,6,7,8])

#Static Method Tests::
def test_parent_i():
    assert BinaryHeap.parent(12) == 6

def test_left_i():
    assert BinaryHeap.left(10) == 21

def test_right_i():
    assert BinaryHeap.right(10) == 22

def test_static_i_calc_zeros():
    assert BinaryHeap.parent(0) == 0
    assert BinaryHeap.left(0) == 1
    assert BinaryHeap.right(0) == 2

def test_heapheight():
    assert heap1.getheapheight() == 3

#Testing MaxHeapify::
def test_heapify_max_1():
    heap1.buildheap()
    assert heap1.eList == [8,5,7,4,1,6,3,2]

def test_heapify_max_2():
    heap2.buildheap()
    assert heap2.eList == [13,11,12,9,10,6,7,8,4,2,5,3,1]

def test_heapify_max_small1():
    heap3.buildheap()
    assert heap3.eList == [3,2,1]

def test_heapify_max_small2():
    heap4.buildheap()
    assert heap4.eList == [2,1]

def test_heapify_max_small3():
    heap5.buildheap()
    assert heap5.eList == [1]


#Testing MinHeapify::
def test_heapify_min_1():
    heap6.buildheap()
    assert heap6.eList == [1,4,2,5,8,3,6,7]

def test_heapify_min_2():
    heap7.buildheap()
    assert heap7.eList == [1,3,2,5,4,8,7,6,10,12,9,11,13]

def test_heapify_min_small1():
    heap8.buildheap()
    assert heap8.eList == [1,2,3]

def test_heapify_min_small2():
    heap9.buildheap()
    assert heap9.eList == [1,2]

def test_heapify_min_small3():
    heap10.buildheap()
    assert heap10.eList == [1]


"""
def test_():
    assert
"""
