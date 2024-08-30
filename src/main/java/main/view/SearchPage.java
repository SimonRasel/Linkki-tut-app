package main.view;

import main.layout.SearchSectionPmo;
import main.table.SearchResultTablePmo;
import org.linkki.core.binding.manager.BindingManager;
import org.linkki.core.binding.manager.DefaultBindingManager;
import org.linkki.core.vaadin.component.page.AbstractPage;
import org.linkki.samples.appsample.model.BusinessPartner;
import org.linkki.samples.appsample.model.BusinessPartnerRepository;

import java.util.ArrayList;
import java.util.List;

public class SearchPage extends AbstractPage {

    private final BindingManager bindingManager = new DefaultBindingManager();
    private List<BusinessPartner> foundPartners = new ArrayList<>();
    private final BusinessPartnerRepository partnerRepository;

    public SearchPage(BusinessPartnerRepository partnerRepository) {
        this.partnerRepository = partnerRepository;
    }

    @Override
    public BindingManager getBindingManager() {
        return bindingManager;
    }

    public void search(String searchText){
        var results = partnerRepository.findBusinessPartners(searchText);
        foundPartners.clear();
        foundPartners.addAll(results);
    }

    @Override
    public void createContent() {
        addSection(new SearchSectionPmo(this::search));
        addSection(new SearchResultTablePmo(() -> foundPartners));
    }

}
