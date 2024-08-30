package main.view;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import main.ui.BusinessPartnerLayout;
import org.linkki.framework.ui.component.Headline;
import org.linkki.samples.appsample.model.BusinessPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;

@PageTitle("BusinessPartner")
@Route(value = "", layout = BusinessPartnerLayout.class)
public class BusinessPartnerView extends VerticalLayout {

    private static final long serialVersionUID = 1L;

    @Autowired
    public BusinessPartnerView(BusinessPartnerRepository businessPartnerRepository) {
        Headline headline = new Headline("Partner Search");
        add(headline);
        SearchPage searchPage = new SearchPage(businessPartnerRepository);
        searchPage.init();
        add(searchPage);
    }
}