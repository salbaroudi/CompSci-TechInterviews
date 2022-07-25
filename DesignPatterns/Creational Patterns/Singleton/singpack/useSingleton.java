//Made private, so we don't have to deal with packages/Single public class errors.
final class Singleton {
    //cannot be accessed outside of class directly, cannot change once initialized.
    private static Singleton instance;
    public String value;

    private Singleton(String value) {
        //Rest of the fields for your app initialized here.
        this.value = value;
    }

    //will call Constructor on our behalf - with branch guard to ensure one instance.
    public static Singleton getInstance(String value) {
        if (instance == null) {
            instance = new Singleton(value);
        }
        return instance;
    }
}

public class useSingleton {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance("FOO");
        Singleton anotherSingleton = Singleton.getInstance("BAR");
        System.out.println(singleton.value);
        System.out.println(anotherSingleton.value);
        System.out.println("We see above, that the two values are the same.");
    }
}
