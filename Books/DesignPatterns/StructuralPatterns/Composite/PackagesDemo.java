import java.util.*;

/*
 * In this example, we illustrate the Composite Design Pattern with Packages and Items.
 * A package can contain other items and packages (tree node), and items are leaves in our tree.
 * 
 */

public class PackagesDemo {
    public static void main(String[] astring) {
        Item item1 = new Item(5,5);
        Item item2 = new Item(10,10);
        Item item3 = new Item(15,15);
        
        CompositePackage cp1 = new CompositePackage();
        CompositePackage cp2 = new CompositePackage();

        cp1.addItem(new Item(5,5));
        cp1.addItem(new Item(10,10));
        cp1.addItem(new Item(15,15));
        cp2.addItem(cp1);
        cp2.addItem(new Item(20,20));
        cp2.addItem(new Item(2,2));
        cp2.addItem(new Item(4,4));
 
        
        System.out.println("Total weight of CompositePackage = " + cp2.sumWeight());
        System.out.println("Total cost of CompositePackage = " + cp2.sumCost());
        return;
   }
}

// Component Interface that Nodes and Leves must share.
interface Package {
    int sumWeight();
    int sumCost();
}

// Leaf item. Just 
class Item implements Package {
    private int weight;
    private int cost;

    public Item(int weight, int cost) {
        this.weight = weight;
        this.cost = cost;
    }
    public int sumWeight(){
        return weight;
    }
    public int sumCost() {
        return cost;
    }
}

class CompositePackage implements Package {
    private List<Package> children; 
    
    //Just start with 5 elements, our examples will be small.
    public CompositePackage() {
        children = new ArrayList<Package>(5);
    }
    
    public void addItem(Package ourPackage) {
        children.add(ourPackage);
        return;
    }

    public int sumWeight(){
        int sum = 0;
        for (int i = 0; i < children.size(); i++) {
            sum+= children.get(i).sumWeight();
        }
        return sum;
    }
    public int sumCost() {
        int sum = 0;
        for (int i = 0; i < children.size(); i++) {
            sum+= children.get(i).sumCost();
        }
        return sum;
    }

    //For Debugging purposes.
    public void printAll() {
        int sum = 0;
        int listLength = children.size();
        for (int i = 0; i < listLength; i++) {
            sum+= children.get(i).sumWeight();
        }
        System.out.println("Our total sum is = " + sum);
    }
}


