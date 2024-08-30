package main.view;

import main.table.AddressPmo;
import main.table.AddressTablePmo;
import org.linkki.core.binding.dispatcher.behavior.PropertyBehavior;
import org.linkki.core.binding.dispatcher.behavior.PropertyBehaviorProvider;
import org.linkki.core.binding.manager.BindingManager;
import org.linkki.core.binding.manager.DefaultBindingManager;
import org.linkki.core.binding.validation.ValidationService;
import org.linkki.core.vaadin.component.page.AbstractPage;
import org.linkki.framework.ui.dialogs.OkCancelDialog;
import org.linkki.framework.ui.dialogs.PmoBasedDialogFactory;
import org.linkki.ips.messages.MessageConverter;
import org.linkki.samples.appsample.model.Address;
import org.linkki.samples.appsample.model.BusinessPartner;
import org.linkki.samples.appsample.model.BusinessPartnerRepository;
import org.linkki.util.handler.Handler;


public class AddressPage extends AbstractPage {

    private final BindingManager bindingManager= new DefaultBindingManager
            (ValidationService.NOP_VALIDATION_SERVICE,
                    PropertyBehaviorProvider.with(PropertyBehavior.readOnly()));
    private final BusinessPartnerRepository partnerRepository;
    private final BusinessPartner partner;

    public AddressPage(BusinessPartnerRepository partnerRepository, BusinessPartner partner) {
        this.partnerRepository = partnerRepository;
        this.partner = partner;
    }

    @Override
    public void createContent() {
        addSection(new AddressTablePmo(partner::getAddresses, this::deleteAddress, this::createNewAddress));
    }

    public void deleteAddress(Address address) {
        partner.removeAddress(address);
    }

    @Override
    protected BindingManager getBindingManager() {
        return bindingManager;
    }

    public void updateUI() {
        getBindingContext().uiUpdated();
    }

    public void createNewAddress() {
        Address address = new Address();

        ValidationService validationService = () -> MessageConverter.convert(address.validate());
        PmoBasedDialogFactory dialogFactory = new PmoBasedDialogFactory(validationService);

        AddressPmo dialogPmo = new AddressPmo(address);

        Handler addHandler = () -> partner.addAddress(address);
        Handler saveHandler = () -> partnerRepository.saveBusinessPartner(partner);
        Handler okHandler = addHandler.andThen(saveHandler).andThen(this::updateUI);

        OkCancelDialog okCancelDialog = dialogFactory.newOkCancelDialog("Add address",
                okHandler, dialogPmo);
        okCancelDialog.setWidth("25em");
        okCancelDialog.open();

    }
}
