package main.table;

import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.icon.VaadinIcon;
import org.linkki.core.defaults.ui.aspects.types.CaptionType;
import org.linkki.core.pmo.ModelObject;
import org.linkki.core.ui.aspects.annotation.BindReadOnlyBehavior;
import org.linkki.core.ui.aspects.types.ReadOnlyBehaviorType;
import org.linkki.core.ui.element.annotation.UIButton;
import org.linkki.core.ui.element.annotation.UITextField;
import org.linkki.core.ui.table.column.annotation.UITableColumn;
import org.linkki.samples.appsample.model.Address;

import java.util.function.Consumer;

public class AddressRowPmo extends AddressPmo{

    protected Address address;
    private Consumer<Address> deleteConsumer;

    public AddressRowPmo(Address address, Consumer<Address> deleteConsumer) {
        super(address);
        this.address = address;
        this.deleteConsumer = deleteConsumer;
    }

    @BindReadOnlyBehavior(value = ReadOnlyBehaviorType.WRITABLE)
    @UITableColumn(width = 50)
    @UIButton(position = 60, captionType = CaptionType.NONE, showIcon = true,
            icon = VaadinIcon.TRASH, variants = {ButtonVariant.LUMO_PRIMARY,
            ButtonVariant.LUMO_SMALL})
    public void deleteButton() {
        deleteConsumer.accept(address);
    }

}
