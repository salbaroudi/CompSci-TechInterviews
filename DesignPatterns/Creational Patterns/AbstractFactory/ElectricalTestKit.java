/*
 * In this practical example of an Abstract Factory, we create a mock system
 * that dispatches test kits for electricians.
 * We have three Products in our Test Kit: Gloves, TestLeads, and Multimeter
 * We have three categories of products, depending on our situation:
 * Low Voltage (<1000V), Medium Voltage (<10000V) and High Voltage (>10000V)
 * Depending on the job site the Electrician goes to, we select the appropriate kit
 * and dispatch it.
 * 
 * Kit selection is done via a pre-defined configuration.
 */

//This acts as our client.
//Our Equivalent Demo Class.
public class ElectricalTestKit {
    //Return a test kit, read configuration.
    private static TestKit configureTestKit(int voltage) {
        WorkCatagoryFactory factory = new LowVoltageFactory();
        if (voltage < 1000) {
            factory = new LowVoltageFactory();
        }
        else if (voltage < 10000) {
            factory = new MediumVoltageFactory();
        }
        else if (voltage >= 10000) {
            factory = new HighVoltageFactory();
        }
        TestKit testkit = new TestKit(factory);
        return testkit;
    }

    public static void main (String[] aStrings) {
        TestKit tk = configureTestKit(2500);
        tk.dispatch(); 
    }
}


//Inside a particular test kit, we have three products.
//Our equivalent "Application"
class TestKit {
    private Gloves gloves;
    private TestLeads testleads;
    private Multimeter multimeter;

    //The magic is here: with our factory method selected during configuration
    //we select specific grades of objects, and write them to our Kit Object.
    public TestKit(WorkCatagoryFactory factory) {
        gloves = factory.selectGloves();
        testleads = factory.selectTestLeads();
        multimeter = factory.selectMultimeter();
    }
    //Just to show we selected specific objects.
    public void dispatch() {
        gloves.materialGauge();
        testleads.maxVoltage();
        multimeter.maxVoltage();
    }
}

// Lets define our products types first.
//Glove Product Interface, Concrete with Voltage Variants:
interface Gloves {
    void materialGauge();
}

class LVGloves implements Gloves{
    public void materialGauge() {
        System.out.println("5mm Gauge - Low Voltage Gloves");
    }
}

class MVGloves implements Gloves {
    public void materialGauge() {
         System.out.println("10mm Gauge - Medium Voltage Gloves");
    }
}

class HVGloves implements Gloves {
    public void materialGauge() {
          System.out.println("15mm Gauge - High Voltage Gloves");
    }
}

// TestLeads Product Interface, Concrete with Voltage Variants:
interface TestLeads {
    void maxVoltage();
}
class LVTestLeads implements TestLeads {
    public void maxVoltage() {
          System.out.println("1000V Max for Test Leads");
    }
}

class MVTestLeads implements TestLeads {
    public void maxVoltage() {
          System.out.println("10000V Max for Test Leads");
    }
}

class HVTestLeads implements TestLeads {
    public void maxVoltage() {
          System.out.println("100000V Max for Test Leads");
    }
}

//Multimeter Product Interface, Concrete with Voltage Variants:
interface Multimeter {
    void maxVoltage();
}

class LVMultimeter implements Multimeter {
    public void maxVoltage() {
          System.out.println("1000V Max for Multimeter");
    }
}

class MVMultimeter implements Multimeter {
    public void maxVoltage() {
          System.out.println("10000V Max for Multimeter");
    }
}

class HVMultimeter implements Multimeter {
    public void maxVoltage() {
          System.out.println("100000V Max for Multimeter");
    }
}

// Lets define our Product Family Factories:
interface WorkCatagoryFactory {
    Gloves selectGloves();
    TestLeads selectTestLeads();
    Multimeter selectMultimeter();
}

class LowVoltageFactory implements WorkCatagoryFactory {
    @Override
    public Gloves selectGloves() {
        return new LVGloves();
    }

    @Override
    public TestLeads selectTestLeads() {
        return new LVTestLeads();
    }

    @Override
    public Multimeter selectMultimeter() {
        return new LVMultimeter();
    }
}

class MediumVoltageFactory implements WorkCatagoryFactory {
    @Override
    public Gloves selectGloves() {
        return new MVGloves();
    }

    @Override
    public TestLeads selectTestLeads() {
        return new MVTestLeads();
    }

    @Override
    public Multimeter selectMultimeter() {
        return new MVMultimeter();
    }
}

class HighVoltageFactory implements WorkCatagoryFactory {
    @Override
    public Gloves selectGloves() {
        return new HVGloves();
    }

    @Override
    public TestLeads selectTestLeads() {
        return new HVTestLeads();
    }

    @Override
    public Multimeter selectMultimeter() {
        return new HVMultimeter();
    }
}


