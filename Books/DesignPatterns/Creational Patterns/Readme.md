## Creational Patterns:

Are a category of design patterns that involve making systems independent of how
objects are created, composed and represented in a system.

### Singleton:

The simplest of the Creational patterns, this pattern accomplishes the following. It insures that:

1) only once instance of a given object can exist in RT, at any time.

2) that the object exists at global scope, for all parts of an application to access.

This is usually accomplished by creating a static Instance field in an object field,
and rendering the constructor *private*. A getInstance method is called by the user(s),
to create/access the singleton instance. An if statement in the private constructor checks if the instance variable is set - and just returns its value if so (instead of making a new object again).

### Factory Method:

With the Factory Method pattern, we use two distint sets of abstract and concrete classes to *decouple* our client usage from underlying product object implementation. By this, we mean we can add specific product classes without having to change the client code in any way. 

#### Actors Involved:

1) Creator Class: Abstract class that standardizes all Concrete Factory Methods.
2) Concrete Factory Classes: Inherit the Creator class, will generate a ConcreteProduct and return it.
3) Product Interface: Defines basic methods/fields that all products must share, to ensure our code is modular.
4) Concrete Product Classes: Implement our Interface, coding specific logic for each product.
5) Client: Only interacts with Creator Class, and only familiar with the black-box signatures provided by the Product interface. 

#### Key Implementation Details:

Our client is only aware of the abstract factory, and the product interface. Indeed, whatever specific product is returned, it is stored in a superscoped variable in the client code. We use sub-class overriding to call the specific methods for a particular product.

The actual selection of a particular Factory and Product depends on client configuration, or system contextual side-effects (as seen in UI Example code). It is always implemented with switches/branching, as a Concrete Factory Class will be dispatched accordingly.


#### Benefits and Drawbacks:

+ Coupling is largely avoided - our only depedency is a simple if-branch case, and the addition of one Concrete Factory and Product class, if we wish to extend our products.

+ You can easily add new products, without modifying client code in any way.

- Two abstract classes, and a separate factory and concrete product class is added for each new product. This is a lot of boiler-plate.

### Abstract Factory:

The Abstract Factory takes individual Factory methods, and varies them in a second dimension. Analagously, if our Factory Methods generate an Array of products, Abstract factory makes a matrix of products, where each product has an additional dimension of varieties.

#### Actors:
1) Client: This implements configuration logic, and selects a particular Abstract Factory, to generate a family of Products
2) Abstract Factory Interface: This enforces a uniform interface that all factory families must adhere to.
3) Concrete Family Factories: Implement the AF Interface, and hold methods/code to generate all products of a *specific* family. 
4) Product Interfaces: Now instead of having all products follow one Product Interface, we have one interface per product - this will vary over families.
5) Concrete Product Classes: For each product interface, we make a product class for each family that we have.


#### Key Implementation Details:

Once again, having abstract classes and interfaces helps us generalize our code - we store concrete objects in Typed References of the interfaces - this allows us to use overriding and keep our client-side code static.

Adding if statements to our configuration code, and adding more Family Factories and Products is how we increase functionality.

The core coding pattern (that allows client to interact with all our classes, is as follows):

```
public class ElectricalTestKit {
    private static TestKit configureTestKit(int voltage) {
        WorkCatagoryFactory factory = new LowVoltageFactory();
        
        //Factory selection logic
        
        TestKit testkit = new TestKit(factory);
        return testkit;
    }

    public static void main (String[] aStrings) {
        TestKit tk = configureTestKit(2500);
        tk.dispatch(); 
    }
}

class TestKit {
    private Gloves gloves;
    private TestLeads testleads;
    private Multimeter multimeter;

    public TestKit(WorkCatagoryFactory factory) {
        gloves = factory.selectGloves();
        testleads = factory.selectTestLeads();
        multimeter = factory.selectMultimeter();
    }
    public void dispatch() {
        gloves.materialGauge();
        testleads.maxVoltage();
        multimeter.maxVoltage();
    }
}

```

### Benefits and Drawbacks:

+ Similar benefits as with the Factory method - we decouple client and product codes.

+ We still get code extensibility and flexibility.

- We have even more boiler-plate to worry about. In addition to product types, we have families of products (2-D matrix of concrete products). For a large number of families with many products, code foot-print is huge.


### References:

