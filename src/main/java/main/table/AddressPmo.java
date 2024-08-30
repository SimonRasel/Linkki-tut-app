package main.table;

import org.linkki.core.defaults.ui.aspects.types.RequiredType;
import org.linkki.core.pmo.ModelObject;
import org.linkki.core.ui.element.annotation.UITextField;
import org.linkki.core.ui.layout.annotation.UISection;
import org.linkki.samples.appsample.model.Address;

@UISection
public class AddressPmo{
    protected Address address;

    public AddressPmo(Address address) {
        this.address = address;
    }

    @ModelObject
    public Address getAddress() {
        return address;
    }

    @UITextField(position = 10, label = "Street", modelAttribute = "street", required = RequiredType.REQUIRED)
    public void street() {}

    @UITextField(position = 20, label = "Number", modelAttribute = "streetNumber", required = RequiredType.REQUIRED, maxLength = 5)
    public void streetNumber() {}

    @UITextField(position = 30, label = "Postal Code", modelAttribute = "postalCode", required = RequiredType.REQUIRED, maxLength = 5)
    public void postalCode() {}

    @UITextField(position = 40, label = "City", modelAttribute = "city", required = RequiredType.REQUIRED)
    public void city() {}

    @UITextField(position = 50, label = "Country", modelAttribute = "country", required = RequiredType.REQUIRED)
    public void country() {}
}
