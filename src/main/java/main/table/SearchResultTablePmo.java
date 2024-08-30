package main.table;

import main.ui.BusinessPartnerInfo;
import org.linkki.core.defaults.columnbased.pmo.SimpleTablePmo;
import org.linkki.core.ui.layout.annotation.UISection;
import org.linkki.samples.appsample.model.BusinessPartner;

import java.util.List;
import java.util.function.Supplier;

@UISection
public class SearchResultTablePmo extends SimpleTablePmo<BusinessPartner, SearchResultRowPmo>{

    String caption = "Search Results";

    public SearchResultTablePmo(Supplier<List<? extends BusinessPartner>> modelObjectsSupplier){
        super(modelObjectsSupplier);
    }

    @Override
    protected SearchResultRowPmo createRow(BusinessPartner businessPartner) {
        return new SearchResultRowPmo(businessPartner);
    }
}
