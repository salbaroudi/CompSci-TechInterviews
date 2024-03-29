## Structural Patterns:

### Glossary (and new Ideas):

- Composition: When the lifecycle of object B is completely controlled by object A. A spawns an instance of B, and B does not get instantiated wihtout A. (B's existance implies A's existance).

- Aggregation: When an object B can be independently instantiated from A, but A can point to/spawn an instance of B.






### Decorator Pattern:

With the decorator pattern, we want to *dynamically* increase the functionality of a particular object class by wrapping it in "decorator" classes, instead of the usual field/method extension, or sub-class inheritence. Recall, that with inheritence, we would have to define relationships before hand, before compilation/run-time. Specifically, if we had a number of extensions, the number of possible subsets of the extensions is of the order $2^{n}$. So a *dynamic route is desirable.*

We wrap it in one of two ways: via Composition, or Aggregation (see glossary above).


#### Actors:
1) Component: This is a interface in which (2) - (4) must implement. Defines most basic functionality.

2) ConcreteComponent: Concrete Class of the original component, with funcitonality we wish to extend.

3) Decorator: Inherits the Component basic interface, and stores a reference to the wrapped object as a data-field. Also stores super() methods for all Concrete Decorators - to operate on the wrapped object, ConcreteDecorators must invoke the Decorator's superclass methods.

4) ConcreteDecorators: Sub-classes of Decorator, that provide and handle specific functionality on their own. Note that the wrapped object reference field, and basic operations on the wrapped object fields are all handled with super() and dealt with by Decorator.

5) Client/Application: Will create the composition/set-up of the decorator code.

#### Key Implementation Details:

When we wrap our component in a Concrete Decorator (CD), each CD must have a reference to the component object as a field. The extension functionality is strictly handled by the CD, and operations on the component are passed up to the Decorator itself. 

The inheritence pattern is as follows: 

(Component Interface ((Concrete Component) (Decorator  ((Conc Dec 1) (Conc Dec 2) ... etc) )))


#### Benefits and Drawbacks:

+ avoids subclass combinatorial explosion, as mentioned above.

+ avoids super-class code blobs (if we needed to provide every possible extension).

- You end up with lots of small objects scattered above - often with some code-redundancy across Concrete Classes.


### Adapter:

With this Design Pattern, we build an Adapter class that allows one class interface to interact with another (incompatable one). The canonical example involves a client interacting with one application interface, and a third-party library that is not designed to work with the said application. The adaption itself is done with Object Composition (Wrapping)


#### Actors:

1) Client: Any user, application or object class. 

2) Target Client Interface: This can be a concrete class, but it must be inherited by the Adaptor Class.

3) Adaptor Class: Inherits the Target Client, (and Possibly the Service Interface). Wraps the Service Object, and internally interacts with it on behalf of the client.

4) Service / Adaptee: External Object with incompatable interface. Is ignorant of being wrapped.


#### Key Implementation Details:

Our Adaptee and Target have incompatible interfaces, by definition. Our Adaptor must translate/mutate requests so that one may interact with the other.

One method for doing this involves multiple-inheritence of the Adaptee and Target, by the Adaptor. As not all languages can easily do this (example: Java), single inheritence, restructuring (so that there are Adaptee and Target interfaces to inherit) has to suffice.

Adaptor must minimally inherit the Target Client interface. It must have a field that points to the Service Object (Adaptee wrapping). The client will invoke the adapter, and pass it the incompatable service object. It then operates on the Service Object by using the Target Interface inherited by the Adaptor.

#### Benefits and Drawbacks:

+ We do not change the Adaptee, or Client classes in constructing a solution. This works well for fixed/3rd party applications that cannot be easily altered.


### Composite:

Compose the data portions of an application into a tree like structure. From a client/app standpoint, treat individual data objects/tree structures identically.

This design pattern is particularly suited to applicaitons, where we need to operate over an entire tree of data. The Tree Composite itself will have methods to do this for us - keeping external implementation to a minimum.


#### Actors: 

1) Component Interface: Defines all basic methods that both leafs and composites (nodes) must follow.

2) Composite (Container) Class: Implements Interface (above), and contains a member like data-field to store other Containers, or Leafs.

3) Leaf Class: Small Terminal class, that implements interface for single objects. Are usually pretty simple in implementation.

4) Client: Assembles the tree structure.

#### Key implementation details:

The enforcement of a single interface for nodes and leafs is the key to this Design Pattern. The member structure of the Composite class instance will be of type interface, so that either nodes or leafs can be stored. Because of sub-typing, when aggregate interface operations are applied to the tree, the correct override method (for a leaf or node) is selected automatically. Our Composite class at the top just needs to initiate the operations, or collect the end result for our Client.


#### Benefits and Drawbacks:

- This model can only work if the data portion of your application can be reprsented as a tree structure - which makes it fairly limited in its usage.

+ Reduced Code footprint, lots of code re-use (from tree and inheritence structure)

+ To a client, doing operations on a leaf or node uses the same interface - all internal details left to the Composite Tree Structure.





