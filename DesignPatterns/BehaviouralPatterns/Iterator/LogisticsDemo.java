import java.util.*;

/*In this simple Iterator Example, we have an Order List that contains client data.
* A warehouse client needs to traverse the days list of packages to ship out.
* the warehouse calls an iterator() to access the Customer Name and Address. The rest of 
* the client data (payment method, total cost) is hidden from the warehouse.
* These fields are kept private, an our iterator only reports the name and address for shipping.
*/


public class LogisticsDemo {
    public static void main(String[] astring) {
        OrderList todaysList = new OrderList();
        todaysList.addOrder(new CustomerRecord("Bill","123 Street",100));
        todaysList.addOrder(new CustomerRecord("Bob","456 Avenue",200));
        todaysList.addOrder(new CustomerRecord("Sarah","789 Crescent",100));
        todaysList.addOrder(new CustomerRecord("Zachary","101112 Drive",100));
        todaysList.addOrder(new CustomerRecord("Igor","131415 Lane",100));

        System.out.println("1");
        //Now lets traverse our order, and print it out.
        Iterator OI = todaysList.createLogisticsIterator();
        System.out.println(OI.hasMoreLabels());
        while(OI.hasMoreLabels()) {
            System.out.println("Label: " + OI.nextShippingLabel());
        }
    }    
}

interface Iterator {
    String nextShippingLabel();
    boolean hasMoreLabels();
}

interface IterableList {
    Iterator createLogisticsIterator();
}

class OrderIterator implements Iterator {
    private int currIndex;
    private int limit;
    private List<CustomerRecord> orders;

    public OrderIterator(List<CustomerRecord> orders) {
        this.currIndex = 0;
        this.limit = orders.size();
        this.orders = orders;
    }

    public boolean hasMoreLabels() {
        System.out.println("currIndex = " + currIndex + ", limit = " + limit);
        return (currIndex < limit);
    }

    public String nextShippingLabel() {
        String name = orders.get(currIndex).customerName;
        String address = orders.get(currIndex).address;
        currIndex+=1;
        return (name + "," + address);
    }
}

class CustomerRecord {
    protected String customerName;
    protected String address;
    private int cost; 

    public CustomerRecord(String cName, String add, int cost) {
        this.customerName = cName;
        this.address = add;
        this.cost = cost;        
    }
}

class OrderList implements IterableList {
    private List<CustomerRecord> orders;

    public OrderList() {
        orders = new ArrayList<CustomerRecord>(10);
    }

    public void addOrder(CustomerRecord cr) {
        orders.add(cr);
    }

    public Iterator createLogisticsIterator() {
        return new OrderIterator(this.orders); 
    }
}

