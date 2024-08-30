package main.table;

import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.icon.VaadinIcon;
import org.linkki.core.defaults.columnbased.pmo.SimpleTablePmo;
import org.linkki.core.defaults.ui.aspects.types.CaptionType;
import org.linkki.core.ui.element.annotation.UIButton;
import org.linkki.core.ui.layout.annotation.SectionHeader;
import org.linkki.core.ui.layout.annotation.UISection;
import org.linkki.framework.ui.notifications.NotificationUtil;
import org.linkki.samples.appsample.model.Address;
import org.linkki.samples.appsample.model.BusinessPartner;
import org.linkki.util.handler.Handler;

import javax.management.Notification;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;


@UISection(caption = "Addresses")
public class AddressTablePmo extends SimpleTablePmo<Address, AddressRowPmo> {
    private Consumer<Address> deleteConsumer;
    private Handler createHandler;

    public AddressTablePmo(Supplier<List<? extends Address>> modelObjectsSupplier,
                           Consumer<Address> deleteConsumer, Handler handler) {
        super(modelObjectsSupplier);
        this.deleteConsumer = deleteConsumer;
        this.createHandler = handler;
    }

    @SectionHeader
    @UIButton(position = 10, captionType = CaptionType.NONE, showIcon = true, icon = VaadinIcon.PLUS,
    variants = {ButtonVariant.LUMO_CONTRAST})
    public void add() {
        createHandler.apply();
    }

    @Override
    protected AddressRowPmo createRow(Address address) {
        return new AddressRowPmo(address, deleteConsumer);
    }
}
