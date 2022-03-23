import pytest
from binheap import BinaryHeap

#Global objects. Do not mutate!!
heap1 = BinaryHeap([1,2,3,4,5,6,7,8],"max")

#Initialize an object correctly.
def test_init():
    assert heap1.heapType == "max"
    assert heap1.eList == [1,2,3,4,5,6,7,8]
    assert heap1.elemCount == len([1,2,3,4,5,6,7,8])


def test_parent_i():
    assert BinaryHeap.parent(12) == 6

def test_left_i():
    assert BinaryHeap.left(10) == 20

def test_right_i():
    assert BinaryHeap.right(10) == 21

def test_static_i_calc_zeros():
    assert BinaryHeap.parent(0) == 0
    assert BinaryHeap.left(0) == 0
    assert BinaryHeap.right(0) == 1


def test_heapheight():
    assert heap1.getheapheight() == 3


"""
def test_():
    assert

def test_():
    assert

def test_():
    assert

def test_():
    assert
"""
