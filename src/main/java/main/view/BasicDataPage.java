package main.view;

import org.linkki.core.binding.manager.BindingManager;
import org.linkki.core.binding.manager.DefaultBindingManager;
import org.linkki.core.vaadin.component.page.AbstractPage;
import org.linkki.samples.appsample.model.BusinessPartner;

public class BasicDataPage extends AbstractPage {
    private BusinessPartner businessPartner;
    private BindingManager bindingManager;
    public BasicDataPage(BusinessPartner partner) {
        this.businessPartner = partner;
        this.bindingManager = new DefaultBindingManager();
    }

    @Override
    public void createContent() {
        addSection(new PartnerDetailsSectionPmo(businessPartner));
    }

    @Override
    protected BindingManager getBindingManager() {
        return bindingManager;
    }
}
