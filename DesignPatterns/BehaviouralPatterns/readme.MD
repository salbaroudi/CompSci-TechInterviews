## Behavioural Patterns




### Iterator:

With an Iterator, we separate data structure traversal code from the data structure class itself. This allows us to traverse elements of a collection, without exposing the underlying representation of the collection itself (privatized ?).






#### Key Implementation Details:

The use of interfaces for the Iterator and Colleciton class decouples the Client from particular Collection/Iterator classes.



#### Benefits and Drawbacks:

+ Any number of iterators can be run at once - as they maintain there own position/state, and do not mutate the data-structure

+ Easy to create new Iterator Sub-classes, for alternative schemes. Client is decoupled from this.

+ Separation of Collection and Traversal code is clean (Single Responsibility Principle).

- Iterators may be overkill, or not very efficient compared to imperative traversal methods.