package main.view;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import main.ui.BusinessPartnerLayout;
import org.linkki.core.vaadin.component.tablayout.LinkkiTabLayout;
import org.linkki.core.vaadin.component.tablayout.LinkkiTabSheet;
import org.linkki.samples.appsample.model.BusinessPartner;
import org.linkki.samples.appsample.model.BusinessPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
import java.util.UUID;

@Route(value = "PartnerDetails", layout = BusinessPartnerLayout.class)
public class PartnerDetailsView extends LinkkiTabLayout implements HasUrlParameter<String> {

    private BusinessPartnerRepository partnerRepository;
    private Optional<BusinessPartner> currentPartner;


    @Autowired
    public PartnerDetailsView(BusinessPartnerRepository businessPartnerRepository) {
        super(Tabs.Orientation.VERTICAL);
        this.getElement().getThemeList().add(THEME_VARIANT_SOLID);
        this.partnerRepository  = businessPartnerRepository;
        this.currentPartner = Optional.empty();

        addTabSheets(
                LinkkiTabSheet.builder("error").caption(VaadinIcon.WARNING.create()).content(this::createErrorLayout)
                        .visibleWhen(() -> currentPartner.isEmpty()).build(),
                LinkkiTabSheet.builder("basic-data").caption(VaadinIcon.USER.create())
                        .content(() -> currentPartner.map(this::createBasicDataPage).orElseGet(Div::new))
                        .visibleWhen(() -> currentPartner.isPresent()).build(),
                LinkkiTabSheet.builder("address").caption(VaadinIcon.HOME.create())
                        .content(() -> currentPartner.map(this::createAddressPage).orElseGet(Div::new))
                        .visibleWhen(() -> currentPartner.isPresent()).build());
    }

    @Override
    public void setParameter(BeforeEvent beforeEvent, String parameter) {
        this.currentPartner = Optional.ofNullable(parameter).map(UUID::fromString)
                .map(partnerRepository::getBusinessPartner);
    }

    public Component createErrorLayout() {
        return new Div(new Text("No partner ID was provided or no partner could be found with the given ID"));
    }

    public Component createBasicDataPage(BusinessPartner partner) {
        BasicDataPage basicDataPage = new BasicDataPage(partner);
        basicDataPage.init();
        return basicDataPage;
    }

    public Component createAddressPage(BusinessPartner partner) {
        AddressPage addressPage = new AddressPage(partnerRepository, partner);
        addressPage.init();
        return addressPage;
    }
}
