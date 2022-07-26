## Structural Patterns:

### Glossary (and new Ideas):

- Composition: When the lifecycle of object B is completely controlled by object A. A spawns an instance of B, and B does not get instantiated wihtout A. (B's Existance implies A's Existance).

- Aggregation: When an object B can be independently instantiated from A, but A can point to/spawn an instance of B.






### Decorator Pattern:

With the decorator pattern, we with to *dynamically* increase the functionality of a particular object class by wrapping it in "decorator" classes, instead of the usual field/method extension, or sub-class inheritence. Recall, that with inheritence, we would have to define relationships before hand, before compilation/run-time. Specifically, if we had a number of extensions, the number of possible subsets of the extensions is of the order $2^{n}$. So a *dynamic route is desirable.*

We wrap it in one of two ways: via Composition, or Aggregation (see glossary above).

Generally, this pattern is 

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

1) Client: Any user, application or object class. This natively makes use

2) Target Client Interface: This can be a concrete class, but it must be inherited by the Adaptor Class.

3) Adaptor Class: Inherits the Target Client, (and Possibly the Service Interface). Wraps the Service Object, and internally interacts with it on behalf of the client.

4) Service / Adaptee: External Object with incompatable interface. Is ignorant of being wrapped.


#### Key Implementation Details:

Our Adaptee and Target have incompatible interfaces, by definition. Our Adaptor must translate/mutate requests so that one may interact with the other.

One method for doing this involves multiple-inheritence of the Adaptee and Target, by the Adaptor. As not all languages can easily do this (example: Java), single inheritence, restructuring (so that there are Adaptee and Target interfaces to inherit) has to suffice.

Adaptor must minimally inherit the Target Client interface. It must have a field that points to the Service Object (Adaptee wrapping). The client will invoke the adapter, and pass it the incompatable service object. It then operates on the Service Object by using the Target Interface inherited by the Adaptor.

#### Benefits and Drawbacks:

