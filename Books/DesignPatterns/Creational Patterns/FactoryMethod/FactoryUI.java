//No access keyword in front of classes defaults to "package private".
//Only other classes in the file or package scope may access the class.
//We still need public for our inner methods, so the classes can interact with
//one another.

// Our Main Class which runs our example (acts as Application/Client).
//For some reason, FactoryUI has to be at the top of the file to run. Annoying.
public class FactoryUI {
    private static Dialog dialog;
    public static void configure() {
        if (System.getProperty("os.name").equals("Windows 10")) {
            dialog = new WindowsDialog();
        }
        else if (System.getProperty("os.name").equals("Linux")) {
            dialog = new LinuxDialog();
        }
        else {
             dialog = new HtmlDialog();
        }
    }

    public static void runBusinessLogic() {
        dialog.renderWindow();
    }

    public static void main(String[] args) {
        configure();
        runBusinessLogic();
    }
}

//Our Product interface, and Concrete  Subclasses
// -------------------
interface Button {
    public void render();
    public void onClick();
}

class HtmlButton implements Button {
    public void render() {
        System.out.println("<button>Test Button</button>");
        onClick();
    }
    public void onClick() {
        System.out.println("Click! Button says - 'Hello World!'");
    }
}

class WindowsButton implements Button {
    public void render() {
        System.out.println("This is a Windows Button");
        onClick();
    }
    public void onClick() {
        System.out.println("Windows has encountered an unexpected error. Shutting down...");
    }
}
// -------------------

class LinuxButton implements Button {
    public void render() {
        System.out.println("This is a Linux Button");
        onClick();
    }
    public void onClick() {
        System.out.println("Click! Linux says - 'Hello World'. It also activated the Espresso Machine, a free cup is waiting for you.");
    }
}

// Our Abstract Factory Class, and Sub-Class Concrete Factories.
// ----------------
abstract class Dialog {

    public void renderWindow() {
        Button okButton = createButton();
        okButton.render();
    }

    /**
     * Subclasses will override this method in order to create specific button
     * objects.
     */
    public abstract Button createButton();
}

//Our factory
class HtmlDialog extends Dialog {

    @Override
    public Button createButton() {
        return new HtmlButton();
    }
}

class WindowsDialog extends Dialog {

    @Override
    public Button createButton() {
        return new WindowsButton();
    }
}

class LinuxDialog extends Dialog {

    @Override
    public Button createButton() {
        return new LinuxButton();
    }
}
